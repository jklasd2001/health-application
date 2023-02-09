import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { User } from 'src/auth/entities/user.entity'
import { Exercise } from 'src/exercises/entities/exercise.entity'

@Entity()
export class Routine extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Exercise, (exercise) => exercise.routine)
  exercises: Exercise[]

  @ManyToOne(() => User)
  @JoinColumn()
  user: User
}
