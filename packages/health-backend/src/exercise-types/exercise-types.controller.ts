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
} from '@nestjs/common'

import { CreateExerciseTypeDto } from './dto/create-exercise-type.dto'
import { UpdateExerciseTypeDto } from './dto/update-exercise-type.dto'
import { ExerciseType } from './entities/exercises-type.entity'
import { ExerciseTypeService } from './exercise-types.service'

@Controller('exercise-type')
// @UseGuards(AuthGuard())
export class ExerciseTypeController {
  private logger = new Logger('ExerciseTypeController')
  constructor(private readonly exerciseTypeService: ExerciseTypeService) {}

  @Get()
  getAllExerciseType() {
    return this.exerciseTypeService.getAllExerciseType()
  }

  @Get('/:id')
  @UsePipes()
  getExerciseTypeById(@Param('id', ParseIntPipe) id: number): Promise<ExerciseType> {
    return this.exerciseTypeService.getExerciseTypeById(id)
  }

  @Post()
  createExerciseType(@Body() createExerciseTypeDto: CreateExerciseTypeDto) {
    return this.exerciseTypeService.createExercise(createExerciseTypeDto)
  }

  @Patch('/:id')
  // @UsePipes(ValidationPipe)
  updateExerciseType(@Param('id') id: number, @Body() updateExerciseDto: UpdateExerciseTypeDto) {
    return this.exerciseTypeService.updateExercise({ id, ...updateExerciseDto })
  }

  @Delete('/:id')
  deleteExerciseType(@Param('id', ParseIntPipe) id: number) {
    return this.exerciseTypeService.deleteExerciseType(id)
  }
}
