import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import Joi from 'joi'

import { AuthModule } from './auth/auth.module'
import { TypeOrmConfigService } from './config/typeorm.config.service'
import { ExerciseModule } from './exercise/exercise.module'
import { ExerciseTypeModule } from './exercise-type/exercise-type.module'
import { HistoriesModule } from './histories/histories.module'
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
    ExerciseModule,
    ExerciseTypeModule,
    RoutineModule,
    HistoriesModule,
    AuthModule,
  ],
})
export class AppModule {}
