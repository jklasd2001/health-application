import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import Joi from 'joi'

import { AuthModule } from './auth/auth.module'
import { TypeOrmConfigService } from './config/type-orm-config-service'
import { ExerciseRegistrationModule } from './exercise-registration/exercise-registration.module'
import { ExerciseTypeModule } from './exercise-types/exercise-types.module'
import { ExercisesModule } from './exercises/exercises.module'
import { RoutinesModule } from './routines/routines.module'

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
        GOOGLE_CLIENT_ID: Joi.string().required(),
        GOOGLE_CLIENT_SECRET: Joi.string().required(),
        GOOGLE_REDIRECT: Joi.string().required(),
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
