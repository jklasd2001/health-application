import { Controller, Get, UseGuards } from '@nestjs/common'

import { AuthService, User, GoogleOAuthGuard, GetUser } from 'src/auth'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(): Promise<void> {
    // EMPTY
  }

  @Get('google/callback')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthRedirect(@GetUser() user: User): Promise<User> {
    return this.authService.googleSignIn(user)
  }
}
