import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcryptjs from 'bcryptjs'
import { Repository } from 'typeorm'

import { SignInDto, SignUpDto } from 'src/auth'

import { User } from './entities/user.entity'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly authRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async findUserByUsername(username: string): Promise<User> {
    const user = await this.authRepository.findOne({
      where: {
        username,
      },
    })

    if (!user) {
      throw new NotFoundException('User가 없습니다.')
    }

    return user
  }

  async signIn({ username, password }: SignInDto) {
    const user = await this.authRepository.findOne({
      where: {
        username,
      },
    })

    // 잘 모르겠음
    const isPasswordMatched = await bcryptjs.compare(password, user.password)

    if (user && isPasswordMatched) {
      // 유저 토큰 생성 (Secret + Payload)

      const payload = {
        username,
      }

      const accessToken = this.jwtService.sign(payload)

      return {
        accessToken,
      }
    }

    throw new UnauthorizedException('비밀버호 정보가 맞지 않습니다.')
  }

  async signUp({ username, password, name }: SignUpDto) {
    const salt = await bcryptjs.genSalt()
    const hashedPassword = await bcryptjs.hash(password, salt)

    const user = this.authRepository.create({
      username,
      password: hashedPassword,
      name,
    })

    if (!user) {
      throw new BadRequestException('유저 생성 실패했습니다.')
    }

    try {
      await this.authRepository.save(user)

      console.log('123123')
    } catch (error) {
      console.log(error)
      if (error.code === '23505') {
        throw new ConflictException('Existing username')
      } else {
        throw new InternalServerErrorException()
      }
    }

    return user
  }
}
