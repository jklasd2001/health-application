import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class History extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: string

  @Column()
  totalExerciseTime: string
}
