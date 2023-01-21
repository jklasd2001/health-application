import { Controller, Delete, Param, Post, Put } from '@nestjs/common'

import { AccountsService } from './accounts.service'

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post()
  async createAccount(name: string) {
    this.accountsService.createAccount(name)
  }

  @Delete(':/id')
  delete() {
    return `delete`
  }

  @Put(':/id')
  patch(@Param('id') id: string) {
    return `patch id == ${id}`
  }
}
