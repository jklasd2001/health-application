import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { GetUser } from 'src/auth/decorators/get-user.decorator'
import { User } from 'src/auth/entities/user.entity'

import { CreateHistoryDto } from './dto/create-history.dto'
import { HistoriesService } from './histories.service'

@UseGuards(AuthGuard())
@Controller('histories')
export class HistoriesController {
  constructor(private readonly historyService: HistoriesService) {}

  @Get()
  getAllHistory() {
    return this.historyService.getAllHistory()
  }

  @Post()
  @UsePipes()
  createHistory(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.createHistory(createHistoryDto)
  }

  @Post('monthly')
  async getMonthlyHistory(@GetUser() user: User, @Body() dateTime: string) {
    return this.historyService.getMonthlyHistory(user, dateTime)
  }

  @Post('daily')
  async getDailyHistory(@GetUser() user: User, @Body() dateTime: string) {
    return this.historyService.getDailyHistory(user, dateTime)
  }
}
