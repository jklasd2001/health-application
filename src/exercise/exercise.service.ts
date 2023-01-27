import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ExerciseType } from 'src/exercise-type/entities'

import { CreateExerciseDto, UpdateExerciseDto } from './dto'
import { Exercise } from './entities'

@Injectable()
export class ExerciseService {
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
    })

    if (!exercise) {
      throw new NotFoundException('없다 이 운동')
    }

    return exercise
  }

  async createExercise({ kg, reps, restTime, rpe, set, exerciseTypeId }: CreateExerciseDto) {
    const exerciseType = await this.exerciseTypeRepository.findOne({
      where: {
        id: exerciseTypeId,
      },
    })

    const exercise = this.exercisesRepository.create({
      kg,
      reps,
      restTime,
      rpe,
      set,
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

    console.log('result', result)
  }
}
