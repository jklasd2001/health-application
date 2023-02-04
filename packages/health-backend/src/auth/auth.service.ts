import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from './entities/user.entity'

export type UserDetails = {
  email: string
  displayName: string
}

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private readonly authRepository: Repository<User>) {}

  async validateUser(details: UserDetails) {
    const user = await this.authRepository.findOneBy({ email: details.email })

    if (user) {
      return user
    }
    const newUser = this.authRepository.create(details)
    return this.authRepository.save(newUser)
  }

  async findUserById(id: number) {
    const user = await this.authRepository.findOneBy({ id })
    return user
  }
}
