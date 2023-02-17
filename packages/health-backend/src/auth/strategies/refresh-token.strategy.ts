import { ForbiddenException, Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { JwtTokenPayLoad } from 'src/auth/types/JwtTokenPayLoad'

import { AuthService } from '../auth.service'

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {
  private readonly logger = new Logger(RefreshTokenStrategy.name)

  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get('JWT_REFRESH_TOKEN_SECRET_KEY'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
    })
  }

  async validate(req: Request, payload: JwtTokenPayLoad) {
    console.log(req)
    const refreshToken = req.get('Authorization').replace('Bearer', '').trim()

    if (!refreshToken) {
      throw new ForbiddenException()
    }

    return {
      ...payload,
      refreshToken,
    }
  }
}
