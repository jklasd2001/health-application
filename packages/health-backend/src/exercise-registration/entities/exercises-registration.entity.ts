import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from 'src/auth'
import { Exercise } from 'src/exercises'
import { Routine } from 'src/routines'

@Entity()
export class ExerciseRegistration extends BaseEntity {
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
