import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Exercise } from 'src/exercises/entities'
import { Routine } from 'src/routines/entities/routine.entity'

import { CreateExerciseRegistrationDto } from './dto'
import { ExerciseRegistration } from './entities'

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

    this.logger.log(exercise.id)

    const routine = await this.routineRepo.findOne({
      where: {
        id: routineId,
      },
    })

    this.logger.log(routine.id)

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
