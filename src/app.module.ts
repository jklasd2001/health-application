import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AccountsModule } from './accounts/accounts.module'
import { typeORMConfig } from './typeorm.config'

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), AccountsModule],
})
export class AppModule {}
