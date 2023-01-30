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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'

import { CreateExerciseDto, UpdateExerciseDto } from './dto'
import { Exercise } from './entities'
import { ExerciseService } from './exercise.service'

@Controller('exercise')
// @UseGuards(AuthGuard())
export class ExerciseController {
  private logger = new Logger('BoardController')
  constructor(private readonly exercisesService: ExerciseService) {}

  @Get()
  getAllExercise() {
    return this.exercisesService.getAllExercise()
  }

  @Get('/:id')
  getExercise(@Param('id', ParseIntPipe) id: number): Promise<Exercise> {
    return this.exercisesService.getExerciseById(id)
  }

  @Post()
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
