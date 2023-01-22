import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from './auth/auth.module'
import { typeORMConfig } from './config/typeorm.config'
import { ExercisesModule } from './exercises/exercises.module'
import { HistoriesModule } from './histories/histories.module'
import { RoutinesModule } from './routines/routines.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    ExercisesModule,
    RoutinesModule,
    HistoriesModule,
    AuthModule,
  ],
})
export class AppModule {}
