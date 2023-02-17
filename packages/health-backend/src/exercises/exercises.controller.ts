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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'

import { CreateExerciseDto } from './dto/create-exercise.dto'
import { UpdateExerciseDto } from './dto/update-exercise.dto'
import { Exercise } from './entities/exercise.entity'
import { ExercisesService } from './exercises.service'

@ApiBearerAuth()
@ApiTags('exercises')
@Controller('exercises')
export class ExercisesController {
  private logger = new Logger('ExercisesController')
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  @ApiOperation({
    summary: '모든 운동 리스트를 가져옵니다.',
  })
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
