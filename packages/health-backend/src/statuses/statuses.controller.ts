import { Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { StartExerciseDto } from './dto/start-exercise.dto'
import { StatusesService } from './statuses.service'

@Controller('statuses')
@UseGuards(AuthGuard())
export class StatusesController {
  constructor(private readonly statusesService: StatusesService) {}

  @Post('start')
  async startExercise({ routineId }: StartExerciseDto) {
    return this.statusesService.startExercise(123, routineId)
  }

  @Post('end')
  async endExercise() {
    return this.endExercise()
  }
}
