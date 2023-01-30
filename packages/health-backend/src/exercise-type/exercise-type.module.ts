import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth/auth.module'
import { TypeOrmExModule } from 'src/typeorm'

import { ExerciseType } from './entities'
import { ExerciseTypeController } from './exercise-type.controller'
import { ExerciseTypeRepository } from './exercise-type.repository'
import { ExerciseTypeService } from './exercise-type.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([ExerciseType]),
    TypeOrmExModule.forCustomRepository([ExerciseTypeRepository]),
    AuthModule,
  ],
  providers: [ExerciseTypeService],
  controllers: [ExerciseTypeController],
})
export class ExerciseTypeModule {}
