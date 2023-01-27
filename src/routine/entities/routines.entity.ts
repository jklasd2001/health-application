import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Exercise } from 'src/exercise/entities'

@Entity()
export class Routine extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Exercise, (exercise) => exercise.routine)
  exercises: Exercise[]
}
