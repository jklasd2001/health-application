import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm'

import { Routine } from 'src/routines/entities/routines.entity'

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @OneToMany((type) => Routine, (routine) => routine.user, { eager: true })
  exercises: Routine[]
}
