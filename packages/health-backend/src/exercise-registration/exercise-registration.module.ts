import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth/auth.module'
import { Exercise } from 'src/exercises/entities'
import { Routine } from 'src/routines/entities/routine.entity'

import { ExerciseRegistration } from './entities'
import { ExerciseRegistrationController } from './exercise-registration.controller'
import { ExerciseRegistrationService } from './exercise-registration.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([ExerciseRegistration]),
    TypeOrmModule.forFeature([Exercise]),
    TypeOrmModule.forFeature([Routine]),
    AuthModule,
  ],
  providers: [ExerciseRegistrationService],
  controllers: [ExerciseRegistrationController],
})
export class ExerciseRegistrationModule {}
