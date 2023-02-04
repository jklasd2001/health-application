import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Exercise } from 'src/exercise/entities'
import { Routine } from 'src/routine/entities/routines.entity'

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
}
