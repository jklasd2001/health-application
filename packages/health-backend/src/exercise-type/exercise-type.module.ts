import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth/auth.module'

import { ExerciseType } from './entities'
import { ExerciseTypeController } from './exercise-type.controller'
import { ExerciseTypeService } from './exercise-type.service'

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseType]), AuthModule],
  providers: [ExerciseTypeService],
  controllers: [ExerciseTypeController],
})
export class ExerciseTypeModule {}
