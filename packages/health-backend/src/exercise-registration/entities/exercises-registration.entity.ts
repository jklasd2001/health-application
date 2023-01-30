import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Exercise } from 'src/exercise/entities'
import { Routine } from 'src/routine/entities/routines.entity'

@Entity()
export class ExerciseRegistration extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  createdAt: string

  @Column()
  kg: number

  @Column()
  set: number

  @Column()
  reps: number

  @OneToOne(() => Routine)
  routine: Routine

  @OneToOne(() => Exercise)
  exercise: Exercise
}
