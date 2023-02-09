import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Exercise } from 'src/exercises'
import { Routine, RoutineController, RoutinesService } from 'src/routines'

@Module({
  imports: [TypeOrmModule.forFeature([Routine]), TypeOrmModule.forFeature([Exercise])],
  providers: [RoutinesService],
  controllers: [RoutineController],
})
export class RoutinesModule {}
