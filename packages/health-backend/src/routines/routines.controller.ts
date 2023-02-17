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

import { UpdateRoutineDto } from './dto/update-routine.dto'
import { Routine } from './entities/routine.entity'
import { RoutinesService } from './routines.service'

@Controller('routines')
export class RoutinesController {
  private logger = new Logger()

  constructor(private routinesService: RoutinesService) {}

  @Get()
  getAllRoutine() {
    return this.routinesService.getAllRoutine()
  }

  @Get('/:id')
  getRoutine(@Param('id', ParseIntPipe) id: number): Promise<Routine> {
    return this.routinesService.getRoutineById(id)
  }

  @Post()
  createRoutine(
    @Body('name') name: string,
    @Body('exerciseIds', new ParseArrayPipe({ items: Number, separator: ',' }))
    exerciseIds: number[],
  ) {
    return this.routinesService.createRoutine({ name, exerciseIds })
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  updateRoutine(@Param('id') id: number, @Body() updateRoutineDto: UpdateRoutineDto) {
    return this.routinesService.updateRoutine({ id, ...updateRoutineDto })
  }

  @Delete('/:id')
  deleteRoutine(@Param('id', ParseIntPipe) id: number) {
    return this.routinesService.deleteRoutine(id)
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
