import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'

import { CreateExerciseDto, UpdateExerciseDto } from './dto'
import { Exercise } from './entities'
import { ExercisesService } from './exercises.service'

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  getAllExercise() {
    return []
  }

  @Get('/:id')
  getExercise(@Param('id', ParseIntPipe) id: number): Promise<Exercise> {
    return this.exercisesService.getExerciseById(id)
  }

  @Post()
  @UsePipes()
  createExercise(@Body() createExerciseDto: CreateExerciseDto) {
    return this.exercisesService.createExercise(createExerciseDto)
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
