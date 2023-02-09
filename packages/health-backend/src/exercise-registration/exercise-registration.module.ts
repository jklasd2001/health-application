import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import {
  ExerciseRegistration,
  ExerciseRegistrationController,
  ExerciseRegistrationService,
} from 'src/exercise-registration'
import { Exercise } from 'src/exercises'
import { Routine } from 'src/routines'

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
