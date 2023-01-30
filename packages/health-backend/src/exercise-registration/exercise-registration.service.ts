import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { CreateExerciseRegistrationDto } from './dto'
import { ExerciseRegistrationRepository } from './exercise-registration.repository'

@Injectable()
export class ExerciseRegistrationService {
  private logger = new Logger()
  constructor(
    @InjectRepository(ExerciseRegistrationRepository)
    private exerciseRegistrationRepository: ExerciseRegistrationRepository,
  ) {}

  async createExerciseRegistration(a: CreateExerciseRegistrationDto) {
    this.exerciseRegistrationRepository.create({
      ...a,
    })
  }
}
