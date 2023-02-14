import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth/auth.module'
import { Exercise } from 'src/exercises/entities/exercise.entity'
import { Routine } from 'src/routines/entities/routine.entity'

import { History } from './entities/history.entity'
import { HistoriesController } from './histories.controller'
import { HistoriesService } from './histories.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([History]),
    TypeOrmModule.forFeature([Exercise]),
    TypeOrmModule.forFeature([Routine]),
    AuthModule,
  ],
  providers: [HistoriesService],
  controllers: [HistoriesController],
})
export class HistoriesModule {}
