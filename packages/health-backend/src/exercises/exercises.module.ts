import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth/auth.module'
import { Movement } from 'src/movements/entities/movement.entity'

import { Exercise } from './entities/exercise.entity'
import { ExercisesController } from './exercises.controller'
import { ExercisesService } from './exercises.service'

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, Movement]), AuthModule],
  providers: [ExercisesService],
  controllers: [ExercisesController],
})
export class ExercisesModule {}
