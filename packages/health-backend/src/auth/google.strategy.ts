import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
// import { PassportStrategy } from '@nestjs/passport'
import { PassportStrategy } from '@nestjs/passport'
import { InjectRepository } from '@nestjs/typeorm'
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20'
import { Repository } from 'typeorm'

import { User } from './entities/user.entity'

interface GooglePayload {
  accessToken: string
  refreshToken: string
  profile: Profile
  done: VerifyCallback
}

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly configService: ConfigService,
  ) {
    super({
      clientID: process.env.OAUTH_GOOGLE_ID,
      clientSecret: process.env.OAUTH_GOOGLE_SECRET,
      callbackURL: process.env.OAUTH_GOOGLE_REDIRECT,
      scope: ['email', 'profile'],
    })
  }

  async validate({ accessToken, refreshToken, profile: { name, emails }, done }: GooglePayload) {
    const user = {
      accessToken,
      refreshToken,
      name: name.givenName,
      email: emails[0].value,
    }
    done(null, user)
  }
}
