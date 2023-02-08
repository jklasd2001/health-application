import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import Joi from 'joi'

import { AuthModule } from './auth/auth.module'
import { TypeOrmConfigService } from './config/type-orm-config-service'
import { ExerciseModule } from './exercise/exercise.module'
import { ExerciseRegistrationModule } from './exercise-registration/exercise-registration.module'
import { ExerciseTypeModule } from './exercise-type/exercise-type.module'
import { RoutineModule } from './routine/routine.module'

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
    ExerciseModule,
    ExerciseTypeModule,
    ExerciseRegistrationModule,
    RoutineModule,
  ],
})
export class AppModule {}
