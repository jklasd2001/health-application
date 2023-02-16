import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from 'src/auth/entities/user.entity'

import { CreateMovementDto } from './dto/create-movement.dto'
import { UpdateMovementDto } from './dto/update-movement.dto'
import { Movement as Movement } from './entities/movement.entity'

@Injectable()
export class MovementsService {
  constructor(@InjectRepository(Movement) private movementRepo: Repository<Movement>) {}

  async getAllMovement(user: User): Promise<Movement[]> {
    const movements = await this.movementRepo
      .createQueryBuilder('movement')
      .where('movement.user_id IS NULL')
      .orWhere('movement.user_id = :userId', { userId: user.id })
      .getMany()

    return movements
  }

  async getMovementById(user: User, id: number): Promise<Movement> {
    const movement = await this.movementRepo
      .createQueryBuilder('movement')
      .orWhere('movement.id = :movementId AND user.id = :userId', {
        movementId: id,
        userId: user.id,
      })
      .getOne()

    if (!movement) {
      throw new NotFoundException('없다 이 운동')
    }

    return movement
  }

  async createMovement(user: User, { name }: CreateMovementDto) {
    const movement = this.movementRepo.create({
      name,
      user,
    })

    if (!movement) {
      throw new BadRequestException('crete 실패')
    }

    this.movementRepo.save(movement)

    return movement
  }

  async updateMovement(user: User, { id, ...rest }: UpdateMovementDto) {
    const movement = await this.getMovementById(user, id)
    const newMovement = {
      ...movement,
      ...rest,
    }

    this.movementRepo.save(newMovement)

    return newMovement
  }

  async deleteMovement(id: number) {
    const result = await this.movementRepo.delete(id)

    if (result.affected === 0) {
      throw new NotFoundException('찾을 수 없어용')
    }
  }
}
