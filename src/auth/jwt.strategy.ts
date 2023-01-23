import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { InjectRepository } from '@nestjs/typeorm'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Repository } from 'typeorm'

import { JwtTokenPayLoad } from 'src/types'

import { User } from './entities/user.entity'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {
    super({
      secretOrKey: 'Jelly',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  async validate(payload: JwtTokenPayLoad) {
    console.log(payload)
    const { username } = payload
    const user: User = await this.userRepo.findOne({
      where: { username },
    })

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}
