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
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { GetUser } from 'src/auth/decorators/get-user.decorator'
import { User } from 'src/auth/entities/user.entity'

import { CreateExerciseTypeDto } from './dto/create-exercise-type.dto'
import { UpdateExerciseTypeDto } from './dto/update-exercise-type.dto'
import { ExerciseType } from './entities/exercises-type.entity'
import { ExerciseTypeService } from './exercise-types.service'

@Controller('exercise-type')
@UseGuards(AuthGuard('jwt'))
export class ExerciseTypeController {
  private logger = new Logger('ExerciseTypeController')
  constructor(private readonly exerciseTypeService: ExerciseTypeService) {}

  @Get()
  getAllExerciseType() {
    return this.exerciseTypeService.getAllExerciseType()
  }

  @Get('/:id')
  getExerciseTypeById(@Param('id', ParseIntPipe) id: number): Promise<ExerciseType> {
    return this.exerciseTypeService.getExerciseTypeById(id)
  }

  @Post()
  createExerciseType(@GetUser() user: User, @Body() createExerciseTypeDto: CreateExerciseTypeDto) {
    console.log(user)
    return this.exerciseTypeService.createExercise(user, createExerciseTypeDto)
  }

  @Patch('/:id')
  updateExerciseType(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateExerciseDto: UpdateExerciseTypeDto,
  ) {
    return this.exerciseTypeService.updateExercise({ id, ...updateExerciseDto })
  }

  @Delete('/:id')
  deleteExerciseType(@Param('id', ParseIntPipe) id: number) {
    return this.exerciseTypeService.deleteExerciseType(id)
  }
}
