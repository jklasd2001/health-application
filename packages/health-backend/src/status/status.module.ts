import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { History } from 'src/histories/entities/history.entity'
import { Exercise } from 'src/exercises/entities/exercise.entity'
import { Routine } from 'src/routines/entities/routine.entity'

import { Status } from './entities/status.entity'
import { StatusController } from './status.controller'
import { StatusService } from './status.service'

@Module({
  imports: [TypeOrmModule.forFeature([Status, Routine, History, Exercise])],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
