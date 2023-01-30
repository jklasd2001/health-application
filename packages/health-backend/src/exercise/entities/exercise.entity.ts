import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

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
  rpe: number

  @Column()
  restTime: number

  @ManyToOne(() => ExerciseType)
  exerciseType: ExerciseType

  @ManyToOne(() => Routine, (routine) => routine.exercises)
  routine: Routine
}
