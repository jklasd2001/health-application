import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AuthCredentialDto } from './dto/auth.credential.dto'
import { User } from './entities/user.entity'

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private readonly authRepository: Repository<User>) {}

  async getUserById(id: number) {
    const user = this.authRepository.findOne({
      where: {
        id,
      },
    })

    if (!user) {
      throw new NotFoundException('유저 읍다')
    }

    return user
  }

  async signUp({ username, password }: AuthCredentialDto) {
    const user = this.authRepository.create({
      username,
      password,
    })

    if (!user) {
      throw new BadRequestException('12312321')
    }

    await this.authRepository.save(user)

    return user
  }
}
