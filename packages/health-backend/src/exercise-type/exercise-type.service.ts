import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { CreateExerciseTypeDto, UpdateExerciseTypeDto } from './dto'
import { ExerciseType } from './entities'
import { ExerciseTypeRepository } from './exercise-type.repository'

@Injectable()
export class ExerciseTypeService {
  constructor(
    @InjectRepository(ExerciseTypeRepository) private exerciseTypeRepo: ExerciseTypeRepository,
  ) {}

  private logger = new Logger()

  async getAllExerciseType(): Promise<ExerciseType[]> {
    const result = await this.exerciseTypeRepo.getAllExerciseType()

    return result
  }

  async getExerciseTypeById(id: number): Promise<ExerciseType> {
    const exercise = await this.exerciseTypeRepo.getExerciseTypeById(id)

    if (!exercise) {
      throw new NotFoundException('없다 이 운동')
    }

    return exercise
  }

  async createExercise({ name }: CreateExerciseTypeDto) {
    const exerciseType = this.exerciseTypeRepo.createExercise({ name })

    return exerciseType
  }

  async updateExercise({ id, ...rest }: UpdateExerciseTypeDto) {
    const exerciseType = await this.exerciseTypeRepo.updateExercise({ id, ...rest })

    return exerciseType
  }

  async deleteExerciseType(id: number) {
    const result = await this.exerciseTypeRepo.deleteExerciseType(id)

    return result
  }
}
