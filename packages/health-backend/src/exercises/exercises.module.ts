import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth'
import { ExerciseType } from 'src/exercise-types'
import { Exercise, ExercisesController, ExercisesService } from 'src/exercises'

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, ExerciseType]), AuthModule],
  providers: [ExercisesService],
  controllers: [ExercisesController],
})
export class ExercisesModule {}
