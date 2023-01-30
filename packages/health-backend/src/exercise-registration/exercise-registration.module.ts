import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth/auth.module'
import { TypeOrmExModule } from 'src/typeorm'

import { ExerciseRegistration } from './entities'
import { ExerciseRegistrationController } from './exercise-registration.controller'
import { ExerciseRegistrationRepository } from './exercise-registration.repository'
import { ExerciseRegistrationService } from './exercise-registration.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([ExerciseRegistration]),
    TypeOrmExModule.forCustomRepository([ExerciseRegistrationRepository]),
    AuthModule,
  ],
  providers: [ExerciseRegistrationService],
  controllers: [ExerciseRegistrationController],
})
export class ExerciseRegistrationModule {}
