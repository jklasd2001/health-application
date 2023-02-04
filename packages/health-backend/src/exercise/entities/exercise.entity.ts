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

import { ExerciseType } from 'src/exercise-type/entities'
import { Routine } from 'src/routine/entities/routines.entity'

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

  @ManyToOne(() => Routine, (routine) => routine.exercises, { eager: true })
  routine: Routine
}
