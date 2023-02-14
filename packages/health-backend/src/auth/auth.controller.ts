import { Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { AuthService } from './auth.service'
import { GetUser } from './decorators/get-user.decorator'
import { SignUpDto } from './dto'
import { SignInDto } from './dto/sign-in.dto'
import { User } from './entities/user.entity'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-in')
  signIn(@Body(ValidationPipe) signInDto: SignInDto) {
    return this.authService.signIn(signInDto)
  }

  @Post('/sign-up')
  signUp(@Body(ValidationPipe) signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto)
  }

  @Post('test')
  @UseGuards(AuthGuard())
  async generateAccessToken(@GetUser() user: User) {
    console.log(user)
    // return this.authService.signIn()
  }
}
