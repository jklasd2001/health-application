import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from 'src/auth/entities/user.entity'

@Entity()
export class Routine extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => User, (user) => user.exercises, { eager: false })
  user: User
}
