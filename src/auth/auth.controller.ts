import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'

import { AuthService } from './auth.service'
import { AuthCredentialDto } from './dto/auth.credential.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id)
    return this.authService.getUserById(id)
  }

  @Post('/sign-up')
  @UsePipes(ValidationPipe)
  signUp(@Body() authCredentialDto: AuthCredentialDto) {
    console.log(authCredentialDto)

    this.authService.signUp(authCredentialDto)
  }
}
