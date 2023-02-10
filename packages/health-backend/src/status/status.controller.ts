import { Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { StartExerciseDto } from './dto/start-exercise.dto'
import { StatusService } from './status.service'

@Controller('status')
@UseGuards(AuthGuard())
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post('start')
  async startExercise({ routineId }: StartExerciseDto) {
    return this.statusService.startExercise(123, routineId)
  }

  @Post('end')
  async endExercise() {
    return this.endExercise()
  }
}
