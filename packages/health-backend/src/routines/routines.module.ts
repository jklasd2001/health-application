import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth'
import { Exercise } from 'src/exercises'
import { Routine, RoutineController, RoutinesService } from 'src/routines'

@Module({
  imports: [TypeOrmModule.forFeature([Routine]), TypeOrmModule.forFeature([Exercise]), AuthModule],
  providers: [RoutinesService],
  controllers: [RoutineController],
})
export class RoutinesModule {}
