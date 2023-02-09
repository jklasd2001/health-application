import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Exercise } from 'src/exercises'
import { CreateRoutineDto, UpdateRoutineDto, Routine } from 'src/routines'

@Injectable()
export class RoutinesService {
  constructor(
    @InjectRepository(Routine) private readonly routineRepository: Repository<Routine>,
    @InjectRepository(Exercise) private readonly exerciseRepository: Repository<Exercise>,
  ) {}

  async getAllRoutine() {
    const allRoutine = await this.routineRepository.find({
      relations: {
        exercises: true,
      },
    })

    return allRoutine
  }

  async getRoutineById(id: number): Promise<Routine> {
    const exercise = await this.routineRepository.findOne({
      where: {
        id,
      },
      relations: {
        exercises: true,
      },
    })

    if (!exercise) {
      throw new NotFoundException('없다 이 운동')
    }

    return exercise
  }

  async createRoutine({ name, exerciseIds }: CreateRoutineDto) {
    try {
      const exercises = await this.exerciseRepository
        .createQueryBuilder('exercise')
        .whereInIds(exerciseIds)
        .getMany()

      const routine = this.routineRepository.create({
        name,
        exercises,
      })

      if (!exercises) {
        throw new BadRequestException('crete 실패')
      }
      this.routineRepository.save(routine)
      return routine
    } catch (err) {
      console.log(err)
    }
  }

  async updateRoutine({ id, ...rest }: UpdateRoutineDto) {
    const routine = await this.getRoutineById(id)

    const newRoutine = {
      ...routine,
      ...rest,
    }

    this.routineRepository.save(newRoutine)

    return newRoutine
  }

  async deleteRoutine(id: number) {
    const result = await this.routineRepository.delete(id)

    if (result.affected === 0) {
      throw new NotFoundException('찾을 수 없어용')
    }
  }
}
