import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { User } from 'src/auth/entities/user.entity'
import { BaseTimeEntity } from 'src/commons/entities/base-time.entity'
import { Exercise } from 'src/exercises/entities/exercise.entity'

@Entity()
export class Routine extends BaseTimeEntity {
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
