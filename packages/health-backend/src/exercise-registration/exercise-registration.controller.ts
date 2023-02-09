import { Body, Controller, Get, Logger, Post, UsePipes } from '@nestjs/common'

import { CreateExerciseRegistrationDto } from './dto/create-exercise-registration.dto'
import { ExerciseRegistrationService } from './exercise-registration.service'

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
