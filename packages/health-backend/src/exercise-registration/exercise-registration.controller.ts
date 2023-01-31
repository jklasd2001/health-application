import { Controller, Logger, Post } from '@nestjs/common'

import { CreateExerciseRegistrationDto } from './dto'
import { ExerciseRegistrationService } from './exercise-registration.service'

@Controller('exercise-registration')
// @UseGuards(AuthGuard())
export class ExerciseRegistrationController {
  private logger = new Logger('ExerciseTypeController')
  constructor(private readonly exerciseRegistrationService: ExerciseRegistrationService) {
    this.logger.log(ExerciseRegistrationController)
  }

  @Post()
  createExerciseRegistration(createExerciseRegistrationDto: CreateExerciseRegistrationDto) {
    this.exerciseRegistrationService.createExerciseRegistration(createExerciseRegistrationDto)
  }
}
