import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { User } from 'src/auth/entities/user.entity'
import { ExerciseType } from 'src/exercise-types/entities/exercises-type.entity'
import { Routine } from 'src/routines/entities/routine.entity'

@Entity()
export class Exercise extends BaseEntity {
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

  @CreateDateColumn()
  createdAt: string

  @CreateDateColumn()
  updatedAt: string

  @OneToOne(() => ExerciseType)
  @JoinColumn()
  exerciseType: ExerciseType

  @ManyToOne(() => Routine, (routine) => routine.exercises)
  routine: Routine

  @ManyToOne(() => User)
  @JoinColumn()
  user: User
}
