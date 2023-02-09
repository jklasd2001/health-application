import { Body, Controller, Get, Logger, Post, UsePipes } from '@nestjs/common'

import {
  CreateExerciseRegistrationDto,
  ExerciseRegistrationService,
} from 'src/exercise-registration'

@Controller('exercise-registration')
// @UseGuards(AuthGuard())
export class ExerciseRegistrationController {
  private logger = new Logger('ExerciseTypeController')
  constructor(private readonly exerciseRegistrationService: ExerciseRegistrationService) {}

  @Get()
  getAllExerciseRegistration() {
    const items = this.exerciseRegistrationService.getAllExerciseRegistration()

    return items
  }

  @Post()
  @UsePipes()
  createExerciseRegistration(@Body() createExerciseRegistrationDto: CreateExerciseRegistrationDto) {
    return this.exerciseRegistrationService.createExerciseRegistration(
      createExerciseRegistrationDto,
    )
  }
}
