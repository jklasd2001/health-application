import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Movement } from 'src/movements/entities/movement.entity'

import { CreateExerciseDto } from './dto/create-exercise.dto'
import { UpdateExerciseDto } from './dto/update-exercise.dto'
import { Exercise } from './entities/exercise.entity'

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise) private readonly exercisesRepo: Repository<Exercise>,
    @InjectRepository(Movement)
    private readonly exerciseTypeRepository: Repository<Movement>,
  ) {}

  async getAllExercise() {
    const allExercise = await this.exercisesRepo.find({
      relations: {
        exerciseType: true,
      },
    })

    return allExercise
  }

  async getExerciseById(id: number): Promise<Exercise> {
    const exercise = await this.exercisesRepo.findOne({
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

    const exercise = this.exercisesRepo.create({
      ...rest,
      exerciseType,
    })

    if (!exercise) {
      throw new BadRequestException('crete 실패')
    }

    this.exercisesRepo.save(exercise)

    return exercise
  }

  async updateExercise({ id, ...rest }: UpdateExerciseDto) {
    const exercise = await this.getExerciseById(id)
    const newExercise = {
      ...exercise,
      ...rest,
    }

    this.exercisesRepo.save(newExercise)

    return newExercise
  }

  async deleteExecise(id: number) {
    const result = await this.exercisesRepo.delete(id)

    if (result.affected === 0) {
      throw new NotFoundException('찾을 수 없어용')
    }
  }
}
