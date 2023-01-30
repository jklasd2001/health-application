import { BadRequestException, NotFoundException } from '@nestjs/common'
import { Repository } from 'typeorm'

import { CustomRepository } from 'src/typeorm'

import { CreateExerciseTypeDto, UpdateExerciseTypeDto } from './dto'
import { ExerciseType } from './entities'

@CustomRepository(ExerciseType)
export class ExerciseTypeRepository extends Repository<ExerciseType> {
  async getAllExerciseType(): Promise<ExerciseType[]> {
    const result = await this.find()

    return result
  }

  async getExerciseTypeById(id: number): Promise<ExerciseType> {
    const exercise = await this.findOne({
      where: {
        id,
      },
    })

    if (!exercise) {
      throw new NotFoundException('없다 이 운동')
    }

    return exercise
  }

  async createExercise({ name }: CreateExerciseTypeDto) {
    const exerciseType = this.create({
      name,
    })

    if (!exerciseType) {
      throw new BadRequestException('crete 실패')
    }

    this.save(exerciseType)

    return exerciseType
  }

  async updateExercise({ id, ...rest }: UpdateExerciseTypeDto) {
    const exerciseType = await this.getExerciseTypeById(id)
    const newExerciseType = {
      ...exerciseType,
      ...rest,
    }

    this.save(newExerciseType)

    return newExerciseType
  }

  async deleteExerciseType(id: number) {
    const result = await this.delete(id)

    if (result.affected === 0) {
      throw new NotFoundException('찾을 수 없어용')
    }
  }
}
