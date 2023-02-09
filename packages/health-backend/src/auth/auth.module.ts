import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthController, AuthService, User } from 'src/auth'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => ({
    //     secret: configService.get('JWT_ACCESS_TOKEN_SECRET_KEY'),
    //     signOptions: {
    //       expiresIn: configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME'),
    //     },
    //   }),
    // }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  // exports: [assportModule],
})
export class AuthModule {}
