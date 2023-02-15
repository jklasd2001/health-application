import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from 'src/auth/entities/user.entity'
import { BaseTimeEntity } from 'src/commons/entities/base-time.entity'
import { Routine } from 'src/routines/entities/routine.entity'

@Entity()
export class Status extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    default: false,
  })
  isExercising: boolean

  @OneToOne(() => Routine)
  @JoinColumn()
  routine?: Routine

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}
