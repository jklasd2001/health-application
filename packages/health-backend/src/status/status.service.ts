import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ExerciseRegistration } from 'src/exercise-registration/entities/exercises-registration.entity'
import { Routine } from 'src/routines/entities/routine.entity'

import { Status } from './entities/status.entity'

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status) private readonly statusRepository: Repository<Status>,
    @InjectRepository(Routine) private readonly routineRepository: Repository<Routine>,
    @InjectRepository(ExerciseRegistration)
    private readonly erRepository: Repository<ExerciseRegistration>,
  ) {}

  async getStatusByUserName(userId: number) {
    const status = this.statusRepository
      .createQueryBuilder('status')
      .where('status.userId = :userId', { userId })
      .getOne()

    if (!status) {
      throw new NotFoundException('Status를 찾지 못했습니다.')
    }

    return status
  }

  async startExercise(userId: number, routineId: number) {
    const status = await this.getStatusByUserName(userId)

    if (status.isExercising) {
      throw new BadRequestException('이미 운동 시작 중입니다.')
    }

    const routine = await this.routineRepository.findOne({
      where: {
        id: routineId,
      },
    })

    status.isExercising = true
    status.routine = routine

    try {
      await this.statusRepository.update(status.id, status)
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async endExercise(userId: number) {
    const status = await this.getStatusByUserName(userId)

    if (!status.isExercising && !status.routine) {
      throw new BadRequestException('운동 중이 아닙니다.')
    }

    status.isExercising = false

    const ers = this.erRepository
      .createQueryBuilder('exercise-registration')
      .where('exercise-registration.routineId', { routineId: status.routine.id })

    /**
     * 1. Exercise 가져옴
     * 2. Exercise의 reps, set 가져옴
     * 3. reps * set = 증량 할지 말지
     * 4. exercise-registration 가져옴(내가 한 것 + 오늘 날짜 + 같은 Routine)
     * 5. exercise-registration을 exercise 별로 분류
     * 6. 각 exercise 세트별로 분리하여 모든 세트가 목표 중량, 횟수에 도달했는지 체크
     * 7. 도달했다면 autoIncreaseWeight 만큼 exercise의 weight 필드의 값을 업데이트 시켜줌
     * 8. 성공했다면 리턴 값으로 증량한 exercise 정보 넘겨줌(프론트엔드에서 보여줌)
     *
     */

    try {
      await this.statusRepository.update(status.id, status)
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }
}
