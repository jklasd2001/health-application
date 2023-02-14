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

  async getAllMovement(): Promise<Movement[]> {
    const result = await this.movementRepo.find({
      order: {
        id: 'ASC',
      },
    })

    return result
  }

  async getMovementById(id: number): Promise<Movement> {
    const exercise = await this.movementRepo.findOne({
      where: {
        id,
      },
    })

    if (!exercise) {
      throw new NotFoundException('없다 이 운동')
    }

    return exercise
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

  async updateMovement({ id, ...rest }: UpdateMovementDto) {
    const movement = await this.getMovementById(id)
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
