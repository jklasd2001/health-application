import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from 'src/auth/entities/user.entity'
import { BaseTimeEntity } from 'src/commons/entities/base-time.entity'
import { Exercise } from 'src/exercises/entities/exercise.entity'
import { Routine } from 'src/routines/entities/routine.entity'

@Entity()
export class History extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  kg: number

  @Column()
  set: number

  @Column()
  reps: number

  @ManyToOne(() => Routine)
  routine: Routine

  @ManyToOne(() => Exercise)
  exercise: Exercise

  @ManyToOne(() => User)
  @JoinColumn()
  user: User
}
