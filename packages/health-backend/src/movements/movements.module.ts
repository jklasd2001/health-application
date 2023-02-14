import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from 'src/auth/auth.module'

import { Movement } from './entities/movement.entity'
import { MovementsController } from './movements.controller'
import { MovementsService } from './movements.service'

@Module({
  imports: [TypeOrmModule.forFeature([Movement]), AuthModule],
  providers: [MovementsService],
  controllers: [MovementsController],
})
export class MovementsModule {}
