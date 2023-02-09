import { IsString, MinLength, MaxLength, Matches } from 'class-validator'

export class UserCredentialDto {
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  username: string

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'pasword only accepts english and number',
  })
  password: string
}
