import { Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common'

import { Public } from 'src/commons/decorators/public.decorator'

import { AuthService } from './auth.service'
import { GetUser } from './decorators/get-user.decorator'
import { SignUpDto } from './dto'
import { SignInDto } from './dto/sign-in.dto'
import { User } from './entities/user.entity'
import { RefreshTokenGuard } from './guards/refresh-token.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('sign-in')
  signIn(@Body(ValidationPipe) signInDto: SignInDto) {
    return this.authService.signIn(signInDto)
  }

  @Public()
  @Post('sign-up')
  signUp(@Body(ValidationPipe) signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto)
  }

  @Public()
  @Post('refresh')
  @UseGuards(RefreshTokenGuard)
  async generateAccessToken(@GetUser() user: User) {
    console.log(user)
    // return this.authService.signIn()
  }
}
