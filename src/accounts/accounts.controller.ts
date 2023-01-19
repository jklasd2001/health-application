import { Controller, Get } from '@nestjs/common'

import { AccountsService } from './accounts.service'

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Get()
  allAccounts() {
    return '12321312321'
  }
}
