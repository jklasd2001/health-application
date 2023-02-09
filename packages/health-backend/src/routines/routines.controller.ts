import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'

import { Routine, RoutinesService, UpdateRoutineDto } from 'src/routines'

@Controller('routine')
export class RoutineController {
  private logger = new Logger()

  constructor(private routineService: RoutinesService) {}

  @Get()
  getAllRoutine() {
    return this.routineService.getAllRoutine()
  }

  @Get('/:id')
  getRoutine(@Param('id', ParseIntPipe) id: number): Promise<Routine> {
    return this.routineService.getRoutineById(id)
  }

  @Post()
  createRoutine(
    @Body('name') name: string,
    @Body('exerciseIds', new ParseArrayPipe({ items: Number, separator: ',' }))
    exerciseIds: number[],
  ) {
    return this.routineService.createRoutine({ name, exerciseIds })
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  updateRoutine(@Param('id') id: number, @Body() updateRoutineDto: UpdateRoutineDto) {
    return this.routineService.updateRoutine({ id, ...updateRoutineDto })
  }

  @Delete('/:id')
  deleteRoutine(@Param('id', ParseIntPipe) id: number) {
    return this.routineService.deleteRoutine(id)
  }

  @Post('/start')
  startRoutine() {
    return 'startRoutine'
  }

  @Post('/end')
  endRoutine() {
    return 'endRoutine'
  }
}
