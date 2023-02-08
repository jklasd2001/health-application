import { Controller, Get, UseGuards } from '@nestjs/common'

import { GetUser } from 'src/auth/decorators/get-user.decorator'

import { AuthService } from './auth.service'
import { User } from './entities'
import { GoogleOAuthGuard } from './guards/google-oauth.guard'

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
