import { Body, Controller, Get, Logger, Post, UseGuards, UsePipes } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { CreateExerciseRegistrationDto } from './dto/create-exercise-registration.dto'
import { ExerciseRegistrationService } from './exercise-registration.service'

@UseGuards(AuthGuard())
@Controller('exercise-registration')
// @UseGuards(AuthGuard())
export class ExerciseRegistrationController {
  private logger = new Logger('ExerciseTypeController')
  constructor(private readonly exerciseRegistrationService: ExerciseRegistrationService) {}

  @Get()
  getAllExerciseRegistration() {
    return this.exerciseRegistrationService.getAllExerciseRegistration()
  }

  @Post()
  @UsePipes()
  createExerciseRegistration(@Body() createExerciseRegistrationDto: CreateExerciseRegistrationDto) {
    return this.exerciseRegistrationService.createExerciseRegistration(
      createExerciseRegistrationDto,
    )
  }
}
