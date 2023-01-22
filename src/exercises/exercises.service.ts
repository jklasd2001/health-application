import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateExerciseDto, UpdateExerciseDto } from './dto'
import { Exercise } from './entities'

@Injectable()
export class ExercisesService {
  constructor(@InjectRepository(Exercise) private exercisesRepository: Repository<Exercise>) {}

  async getExerciseById(id: number): Promise<Exercise> {
    const exercise = await this.exercisesRepository.findOne({
      where: {
        id,
      },
    })

    if (!exercise) {
      throw new NotFoundException('없다 이 운동')
    }

    return exercise
  }

  async createExercise({ kg, name, reps, restTime, rpe, set }: CreateExerciseDto) {
    const exercise = await this.exercisesRepository.create({
      kg,
      name,
      reps,
      restTime,
      rpe,
      set,
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
