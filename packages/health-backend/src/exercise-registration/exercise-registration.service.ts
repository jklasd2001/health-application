import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateExerciseRegistrationDto, ExerciseRegistration } from 'src/exercise-registration'
import { Exercise } from 'src/exercises'
import { Routine } from 'src/routines'

@Injectable()
export class ExerciseRegistrationService {
  private logger = new Logger()
  constructor(
    @InjectRepository(ExerciseRegistration)
    private exerciseRegistrationRepo: Repository<ExerciseRegistration>,
    @InjectRepository(Exercise)
    private exerciseRepo: Repository<Exercise>,
    @InjectRepository(Routine)
    private routineRepo: Repository<Routine>,
  ) {}

  async getAllExerciseRegistration() {
    const items = await this.exerciseRegistrationRepo.find({
      relations: {
        exercise: true,
        routine: true,
      },
    })

    return items
  }

  async createExerciseRegistration({
    exerciseId,
    routineId,
    ...rest
  }: CreateExerciseRegistrationDto) {
    const exercise = await this.exerciseRepo.findOne({
      where: {
        id: exerciseId,
      },
    })

    const routine = await this.routineRepo.findOne({
      where: {
        id: routineId,
      },
    })

    const exerciseRegistration = this.exerciseRegistrationRepo.create({
      ...rest,
      exercise,
      routine,
    })

    if (!exerciseRegistration) {
      throw new BadRequestException('crete 실패')
    }

    this.exerciseRegistrationRepo.save(exerciseRegistration)

    return exerciseRegistration
  }
}
