import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AccountsModule } from './accounts/accounts.module'
import { ExercisesModule } from './exercises/exercises.module'
import { HistoriesModule } from './histories/histories.module'
import { RoutinesModule } from './routines/routines.module'
import { typeORMConfig } from './typeorm.config'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    AccountsModule,
    ExercisesModule,
    RoutinesModule,
    HistoriesModule,
    AuthModule,
  ],
})
export class AppModule {}
