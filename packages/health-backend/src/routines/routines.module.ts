import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Exercise } from 'src/exercises/entities/exercise.entity'

import { Routine } from './entities/routine.entity'
import { RoutinesController } from './routines.controller'
import { RoutinesService } from './routines.service'

@Module({
  imports: [TypeOrmModule.forFeature([Routine]), TypeOrmModule.forFeature([Exercise])],
  providers: [RoutinesService],
  controllers: [RoutinesController],
})
export class RoutinesModule {}
