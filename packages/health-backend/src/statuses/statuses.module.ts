import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Exercise } from 'src/exercises/entities/exercise.entity'
import { History } from 'src/histories/entities/history.entity'
import { Routine } from 'src/routines/entities/routine.entity'

import { Status } from './entities/status.entity'
import { StatusesController } from './statuses.controller'
import { StatusesService } from './statuses.service'

@Module({
  imports: [TypeOrmModule.forFeature([Status, Routine, History, Exercise])],
  controllers: [StatusesController],
  providers: [StatusesService],
})
export class StatusesModule {}
