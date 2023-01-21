import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Exercise extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

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
}
