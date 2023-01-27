import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Routine } from './entities/routines.entity'

@Injectable()
export class RoutineService {
  constructor(@InjectRepository(Routine) private readonly routineRepository: Repository<Routine>) {}
}
