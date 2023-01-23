import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { User } from 'src/auth/entities/user.entity'
import { GetUser } from 'src/auth/get.user.decorator'

import { CreateExerciseDto, UpdateExerciseDto } from './dto'
import { Exercise } from './entities'
import { ExercisesService } from './exercises.service'

@Controller('exercises')
@UseGuards(AuthGuard())
export class ExercisesController {
  private logger = new Logger('BoardController')
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  getAllExercise() {
    this.logger.verbose(`User dkdkdkasodkasok`)
    return []
  }

  @Get('/:id')
  getExercise(@Param('id', ParseIntPipe) id: number): Promise<Exercise> {
    return this.exercisesService.getExerciseById(id)
  }

  @Post()
  @UsePipes()
  createExercise(@Body() createExerciseDto: CreateExerciseDto, @GetUser() user: User) {
    return this.exercisesService.createExercise(createExerciseDto, user)
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  updateExercise(@Param('id') id: number, @Body() updateExerciseDto: UpdateExerciseDto) {
    return this.exercisesService.updateExercise({ id, ...updateExerciseDto })
  }

  @Delete('/:id')
  deleteExercise(@Param('id', ParseIntPipe) id: number) {
    return this.exercisesService.deleteExecise(id)
  }
}
