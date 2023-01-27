import { Module } from '@nestjs/common'

import { HistoriesController } from './histories.controller'
import { HistoriesService } from './histories.service'

@Module({
  providers: [HistoriesService],
  controllers: [HistoriesController],
})
export class HistoriesModule {}
