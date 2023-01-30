import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth/auth.module'
import { ExerciseType } from 'src/exercise-type/entities'

import { Exercise } from './entities'
import { ExerciseController } from './exercise.controller'
import { ExerciseService } from './exercise.service'

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, ExerciseType]), AuthModule],
  providers: [ExerciseService],
  controllers: [ExerciseController],
})
export class ExerciseModule {}
