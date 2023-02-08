import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth/auth.module'
import { Exercise } from 'src/exercises/entities'

import { Routine } from './entities/routine.entity'
import { RoutineController } from './routines.controller'
import { RoutinesService } from './routines.service'

@Module({
  imports: [TypeOrmModule.forFeature([Routine]), TypeOrmModule.forFeature([Exercise]), AuthModule],
  providers: [RoutinesService],
  controllers: [RoutineController],
})
export class RoutinesModule {}
