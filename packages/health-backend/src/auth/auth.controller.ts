import { Body, Controller, Post, ValidationPipe } from '@nestjs/common'

import { AuthService } from './auth.service'
import { UserCredentialDto } from './dto/user.credential.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-in')
  signIn(@Body(ValidationPipe) authCredentialDto: UserCredentialDto) {
    return this.authService.signIn(authCredentialDto)
  }

  @Post('/sign-up')
  signUp(@Body(ValidationPipe) authCredentialDto: UserCredentialDto) {
    return this.authService.signUp(authCredentialDto)
  }

  @Post('refreshToken')
  async generateAccessToken() {
    // return this.authService.signIn()
  }
}
