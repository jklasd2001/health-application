import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { genSalt, hash, compare } from 'bcryptjs'
import { Repository } from 'typeorm'

import { SignInDto, SignUpDto } from './'
import { User } from './entities/user.entity'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly authRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async findUserById(userId: number): Promise<User> {
    const user = await this.authRepository.findOne({
      where: {
        id: userId,
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
    const isPasswordMatched = await compare(password, user.password)

    if (user && isPasswordMatched) {
      // 유저 토큰 생성 (Secret + Payload)
      const tokens = await this.getTokens(user.id, user.username)
      await this.updateRefreshToken(user.id, tokens.refreshToken)

      return tokens
    }

    throw new UnauthorizedException()
  }

  // 유저 조회 후 refreshToken을 null로 만듬
  async signOut(userId: number): Promise<boolean> {
    const user = await this.findUserById(userId)
    user.refreshToken = null

    this.authRepository.save(user)

    return true
  }

  async signUp({ username, password, name }: SignUpDto) {
    const hashedPassword = await this.hashData(password)

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
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing username')
      } else {
        throw new InternalServerErrorException()
      }
    }

    return user
  }

  // string 해시 처리
  async hashData(data: string): Promise<string> {
    const salt = await genSalt()
    const hashedData = await hash(data, salt)
    return hashedData
  }

  async updateAccessToken(userId: number, refreshToken: string) {
    const user = await this.findUserById(userId)
    if (!user || !user.refreshToken) {
      throw new ForbiddenException()
    }

    const isRefreshTokenMatched = await compare(refreshToken, user.refreshToken)
    if (isRefreshTokenMatched) {
      throw new ForbiddenException()
    }

    const tokens = await this.getTokens(user.id, user.username)
    await this.updateRefreshToken(user.id, tokens.refreshToken)

    return tokens
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken)
    const user = await this.findUserById(userId)
    user.refreshToken = hashedRefreshToken
    await this.authRepository.save(user)

    return user
  }

  async getTokens(userId: number, username: string) {
    const payload = {
      sub: userId,
      username,
    }

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET_KEY'),
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET_KEY'),
        expiresIn: '15m',
      }),
    ])

    return {
      accessToken,
      refreshToken,
    }
  }
}
