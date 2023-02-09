import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth/auth.module'
import { ExerciseType } from 'src/exercise-types/entities/exercises-type.entity'

import { Exercise } from './entities/exercise.entity'
import { ExercisesController } from './exercises.controller'
import { ExercisesService } from './exercises.service'

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, ExerciseType]), AuthModule],
  providers: [ExercisesService],
  controllers: [ExercisesController],
})
export class ExercisesModule {}
