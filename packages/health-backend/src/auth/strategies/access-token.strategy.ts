import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { JwtTokenPayLoad } from 'src/auth/types/JwtTokenPayLoad'

import { AuthService } from '../auth.service'
import { User } from '../entities/user.entity'

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly authService: AuthService, private configService: ConfigService) {
    super({
      secretOrKey: configService.get('JWT_ACCESS_TOKEN_SECRET_KEY'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  async validate(payload: JwtTokenPayLoad) {
    const { sub } = payload
    const user: User = await this.authService.findUserById(sub)

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}
