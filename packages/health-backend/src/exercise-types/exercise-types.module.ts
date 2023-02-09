import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth'
import { ExerciseType, ExerciseTypeController, ExerciseTypeService } from 'src/exercise-types'

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseType]), AuthModule],
  providers: [ExerciseTypeService],
  controllers: [ExerciseTypeController],
})
export class ExerciseTypeModule {}
