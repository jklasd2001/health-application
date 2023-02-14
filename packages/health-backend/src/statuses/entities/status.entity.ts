import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { User } from 'src/auth/entities/user.entity'
import { Routine } from 'src/routines/entities/routine.entity'

export class Status {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    default: false,
  })
  isExercising: boolean

  @UpdateDateColumn()
  updatedAt: string

  @OneToOne(() => Routine)
  @JoinColumn()
  routine?: Routine

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}
