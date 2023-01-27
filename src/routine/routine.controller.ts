import { Controller, Get } from '@nestjs/common'

import { RoutineService } from './routine.service'

@Controller('routine')
export class RoutineController {
  constructor(private routineService: RoutineService) {}

  @Get()
  getAllRoutines() {
    return '123123123'
  }
}
