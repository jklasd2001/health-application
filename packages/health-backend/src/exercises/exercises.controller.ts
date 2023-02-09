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

import { CreateExerciseDto, UpdateExerciseDto, Exercise, ExercisesService } from 'src/exercises'

@ApiBearerAuth()
@ApiTags('exercise')
@Controller('exercise')
// @UseGuards(AuthGuard())
export class ExercisesController {
  private logger = new Logger('ExerciseController')
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
