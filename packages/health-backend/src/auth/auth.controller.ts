import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { Request as ApiRequest } from 'express'

import { AuthService } from './auth.service'
import { GoogleOAuthGuard } from './guards/google-oauth.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(GoogleOAuthGuard)
  @Get()
  async googleAuth() {
    console.log('auth')
  }

  @UseGuards(GoogleOAuthGuard)
  @Get('google/callback')
  async googleAuthRedirect(@Req() req: ApiRequest) {
    return this.authService.googleLogin(req)
  }

  @Get('babo')
  async test() {
    return '123123'
  }
}
