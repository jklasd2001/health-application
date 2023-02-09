import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Exercise } from 'src/exercises/entities/exercise.entity'

import { Routine } from './entities/routine.entity'
import { RoutineController } from './routines.controller'
import { RoutinesService } from './routines.service'

@Module({
  imports: [TypeOrmModule.forFeature([Routine]), TypeOrmModule.forFeature([Exercise])],
  providers: [RoutinesService],
  controllers: [RoutineController],
})
export class RoutinesModule {}
