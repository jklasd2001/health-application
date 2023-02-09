import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ExerciseType } from 'src/exercise-types'
import { CreateExerciseDto, UpdateExerciseDto, Exercise } from 'src/exercises'

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise) private readonly exercisesRepository: Repository<Exercise>,
    @InjectRepository(ExerciseType)
    private readonly exerciseTypeRepository: Repository<ExerciseType>,
  ) {}

  async getAllExercise() {
    const allExercise = await this.exercisesRepository.find({
      relations: {
        exerciseType: true,
      },
    })

    return allExercise
  }

  async getExerciseById(id: number): Promise<Exercise> {
    const exercise = await this.exercisesRepository.findOne({
      where: {
        id,
      },
      relations: {
        exerciseType: true,
      },
      order: {
        id: 'ASC',
      },
    })

    if (!exercise) {
      throw new NotFoundException('없다 이 운동')
    }

    return exercise
  }

  async createExercise({ exerciseTypeId, ...rest }: CreateExerciseDto) {
    const exerciseType = await this.exerciseTypeRepository.findOne({
      where: {
        id: exerciseTypeId,
      },
    })

    if (!exerciseType) {
      throw new BadRequestException('Exercise Type이 없어용')
    }

    const exercise = this.exercisesRepository.create({
      ...rest,
      exerciseType,
    })

    if (!exercise) {
      throw new BadRequestException('crete 실패')
    }

    this.exercisesRepository.save(exercise)

    return exercise
  }

  async updateExercise({ id, ...rest }: UpdateExerciseDto) {
    const exercise = await this.getExerciseById(id)
    const newExercise = {
      ...exercise,
      ...rest,
    }

    this.exercisesRepository.save(newExercise)

    return newExercise
  }

  async deleteExecise(id: number) {
    const result = await this.exercisesRepository.delete(id)

    if (result.affected === 0) {
      throw new NotFoundException('찾을 수 없어용')
    }
  }
}
