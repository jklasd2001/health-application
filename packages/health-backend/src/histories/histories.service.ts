import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DateTime } from 'luxon'
import { Repository } from 'typeorm'

import { User } from 'src/auth/entities/user.entity'
import { Exercise } from 'src/exercises/entities/exercise.entity'
import { Routine } from 'src/routines/entities/routine.entity'

import { CreateHistoryDto } from './dto/create-history.dto'
import { History } from './entities/history.entity'

@Injectable()
export class HistoriesService {
  constructor(
    @InjectRepository(History)
    private historyRepo: Repository<History>,
    @InjectRepository(Exercise)
    private exerciseRepo: Repository<Exercise>,
    @InjectRepository(Routine)
    private routineRepo: Repository<Routine>,
  ) {}

  async getAllHistory() {
    const items = await this.historyRepo.find({
      relations: {
        exercise: true,
        routine: true,
      },
    })

    return items
  }

  async createHistory({ exerciseId, routineId, ...rest }: CreateHistoryDto) {
    const exercise = await this.exerciseRepo.findOne({
      where: {
        id: exerciseId,
      },
    })

    const routine = await this.routineRepo.findOne({
      where: {
        id: routineId,
      },
    })

    const exerciseRegistration = this.historyRepo.create({
      ...rest,
      exercise,
      routine,
    })

    if (!exerciseRegistration) {
      throw new BadRequestException('crete 실패')
    }

    this.historyRepo.save(exerciseRegistration)

    return exerciseRegistration
  }

  async getMonthlyHistory(user: User, date: string) {
    try {
      const startDateTime = DateTime.fromISO(date).startOf('month')
      const endDateTime = DateTime.fromISO(date).endOf('month')

      const histories = await this.historyRepo
        .createQueryBuilder('history')
        .where(`history.user = :userId`, { userId: user.id })
        .andWhere(`history.created_at >= :start_at`, { start_at: startDateTime.toJSDate() })
        .andWhere(`history.created_at <= :end_at`, { end_at: endDateTime.toJSDate() })
        .getMany()

      const groupedHistories = histories.reduce((prev, current) => {
        const yearAndMonth = DateTime.fromJSDate(current.createdAt).toFormat('yyyy-MM')

        prev[yearAndMonth] = [...prev[yearAndMonth], current]

        return prev
      }, {} as Record<string, History[]>)

      return groupedHistories
    } catch (err) {
      throw new BadRequestException('Invalid iso Datetime')
    }
  }

  async getDailyHistory(user: User, date: string) {
    try {
      const startDateTime = DateTime.fromISO(date).startOf('day')
      const endDateTime = DateTime.fromISO(date).endOf('day')

      const histories = await this.historyRepo
        .createQueryBuilder('history')
        .where(`history.user = :userId`, { userId: user.id })
        .andWhere(`history.created_at >= :start_at`, { start_at: startDateTime.toJSDate() })
        .andWhere(`history.created_at <= :end_at`, { end_at: endDateTime.toJSDate() })
        .getMany()

      return histories
    } catch (err) {
      throw new BadRequestException('Invalid iso Datetime')
    }
  }
}
