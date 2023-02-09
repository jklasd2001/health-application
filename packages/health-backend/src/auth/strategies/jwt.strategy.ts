import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { AuthService, User } from 'src/auth'
import { JwtTokenPayLoad } from 'src/types'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      secretOrKey: 'Jelly',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  async validate(payload: JwtTokenPayLoad) {
    const { username } = payload
    const user: User = await this.authService.findUserByUsername(username)

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}
