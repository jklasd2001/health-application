import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Account } from './accounts.entity'

@Injectable()
export class AccountsService {
  constructor(@InjectRepository(Account) private accountRepository: Repository<Account>) {}

  async getAccount(id: number): Promise<Account> {
    const account = await this.accountRepository.findOne({
      where: {
        id,
      },
    })

    if (!account) {
      throw new NotFoundException(`Can't find Account with id ${id}`)
    }

    return account
  }

  async createAccount(name: string): Promise<Account> {
    const account = this.accountRepository.create({
      name,
    })

    if (account) {
      throw new BadRequestException(`Can't create Account, check parameters`)
    }

    return account
  }

  async updateAccount(name: string) {
    // const account = await this.getAccount(2)
  }
}
