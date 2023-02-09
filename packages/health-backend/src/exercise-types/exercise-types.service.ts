import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateExerciseTypeDto } from './dto/create-exercise-type.dto'
import { UpdateExerciseTypeDto } from './dto/update-exercise-type.dto'
import { ExerciseType } from './entities/exercises-type.entity'

@Injectable()
export class ExerciseTypeService {
  constructor(@InjectRepository(ExerciseType) private exerciseTypeRepo: Repository<ExerciseType>) {}

  async getAllExerciseType(): Promise<ExerciseType[]> {
    const result = await this.exerciseTypeRepo.find({
      order: {
        id: 'ASC',
      },
    })

    return result
  }

  async getExerciseTypeById(id: number): Promise<ExerciseType> {
    const exercise = await this.exerciseTypeRepo.findOne({
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
    const exerciseType = this.exerciseTypeRepo.create({
      name,
    })

    if (!exerciseType) {
      throw new BadRequestException('crete 실패')
    }

    this.exerciseTypeRepo.save(exerciseType)

    return exerciseType
  }

  async updateExercise({ id, ...rest }: UpdateExerciseTypeDto) {
    const exerciseType = await this.getExerciseTypeById(id)
    const newExerciseType = {
      ...exerciseType,
      ...rest,
    }

    this.exerciseTypeRepo.save(newExerciseType)

    return newExerciseType
  }

  async deleteExerciseType(id: number) {
    const result = await this.exerciseTypeRepo.delete(id)

    if (result.affected === 0) {
      throw new NotFoundException('찾을 수 없어용')
    }
  }
}
