import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from 'src/auth'

export type UserDetails = {
  email: string
  displayName: string
}

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private readonly authRepository: Repository<User>) {}

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.authRepository.findOne({
      where: {
        email,
      },
    })

    return user
  }

  async googleSignIn({ email, name }: User) {
    const findUser = await this.findUserByEmail(email)

    // User가 없을 시
    if (!findUser) {
      const user = this.authRepository.create({
        email,
        name,
      })

      if (!user) {
        throw new BadRequestException('crete 실패')
      }

      this.authRepository.save(user)

      return user
    }
    // User가 있을 시

    return findUser
  }
}
