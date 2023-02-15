import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from 'src/auth/entities/user.entity'
import { BaseTimeEntity } from 'src/commons/entities/base-time.entity'

@Entity()
export class Movement extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => User)
  @JoinColumn()
  user?: User
}
