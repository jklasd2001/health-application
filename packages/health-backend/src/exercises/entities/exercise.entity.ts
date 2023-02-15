import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from 'src/auth/entities/user.entity'
import { BaseTimeEntity } from 'src/commons/entities/base-time.entity'
import { Movement } from 'src/movements/entities/movement.entity'
import { Routine } from 'src/routines/entities/routine.entity'

@Entity()
export class Exercise extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  kg: number

  @Column()
  set: number

  @Column()
  reps: number

  @Column()
  rir: number

  @Column()
  restTime: number

  @Column({
    default: 5,
  })
  autoIncreaseWeight: number

  @Column({
    default: true,
  })
  isAutoIncrease: boolean

  @Column()
  memo: string

  @OneToOne(() => Movement)
  @JoinColumn()
  exerciseType: Movement

  @ManyToOne(() => Routine, (routine) => routine.exercises)
  routine: Routine

  @ManyToOne(() => User)
  @JoinColumn()
  user: User
}
