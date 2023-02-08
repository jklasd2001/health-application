import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from 'src/auth/entities'
import { Exercise } from 'src/exercises/entities'
import { Routine } from 'src/routines/entities/routine.entity'

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
