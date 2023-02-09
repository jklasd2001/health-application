import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import Joi from 'joi'

import { AuthModule } from 'src/auth'
import { TypeOrmConfigService } from 'src/config'
import { ExerciseRegistrationModule } from 'src/exercise-registration'
import { RoutinesModule } from 'src/routines'

import { ExerciseTypeModule } from './exercise-types/exercise-types.module'
import { ExercisesModule } from './exercises/exercises.module'

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
    ExerciseTypeModule,
    ExerciseRegistrationModule,
    RoutinesModule,
  ],
})
export class AppModule {}
