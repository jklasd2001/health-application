import { Controller, Get, Request, UseGuards } from '@nestjs/common'

import { AuthService } from './auth.service'
import { GoogleOAuthGuard } from './google-oauth.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req) {
    this.authService.googleLogin(req)
  }

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.authService.googleLogin(req)
  }
}
