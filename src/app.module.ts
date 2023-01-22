import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from './auth/auth.module'
import { ExercisesModule } from './exercises/exercises.module'
import { HistoriesModule } from './histories/histories.module'
import { RoutinesModule } from './routines/routines.module'
import { typeORMConfig } from './typeorm.config'

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
