import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import Joi from 'joi'

import { AuthModule } from 'src/auth/auth.module'
import { TypeOrmConfigService } from 'src/config/type-orm-config-service'
import { HistoriesModule } from 'src/histories/histories.module'
import { RoutinesModule } from 'src/routines/routines.module'

import { ExercisesModule } from './exercises/exercises.module'
import { MovementsModule } from './movements/movements.module'
import { StatusesModule } from './statuses/statuses.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_PORT: Joi.string().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_DATABASE: Joi.string().required(),
        JWT_ACCESS_TOKEN_SECRET_KEY: Joi.string().required(),
        JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        JWT_REFRESH_TOKEN_SECRET_KEY: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    AuthModule,
    ExercisesModule,
    MovementsModule,
    HistoriesModule,
    RoutinesModule,
    StatusesModule,
  ],
})
export class AppModule {}
