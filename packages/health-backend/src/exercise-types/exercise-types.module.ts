import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth/auth.module'

import { ExerciseType } from './entities/exercises-type.entity'
import { ExerciseTypeController } from './exercise-types.controller'
import { ExerciseTypeService } from './exercise-types.service'

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseType]), AuthModule],
  providers: [ExerciseTypeService],
  controllers: [ExerciseTypeController],
})
export class ExerciseTypeModule {}
