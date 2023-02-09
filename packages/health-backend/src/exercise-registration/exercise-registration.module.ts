import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Exercise } from 'src/exercises/entities/exercise.entity'
import { Routine } from 'src/routines/entities/routine.entity'

import { ExerciseRegistration } from './entities/exercises-registration.entity'
import { ExerciseRegistrationController } from './exercise-registration.controller'
import { ExerciseRegistrationService } from './exercise-registration.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([ExerciseRegistration]),
    TypeOrmModule.forFeature([Exercise]),
    TypeOrmModule.forFeature([Routine]),
  ],
  providers: [ExerciseRegistrationService],
  controllers: [ExerciseRegistrationController],
})
export class ExerciseRegistrationModule {}
