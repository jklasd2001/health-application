import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm'

import { BaseTimeEntity } from 'src/commons/entities/base-time.entity'

@Entity()
@Unique(['username']) // email은 중복되지 않게
export class User extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  name: string

  @Column()
  password: string

  @Column({
    default: false,
  })
  isExercising: boolean
}
