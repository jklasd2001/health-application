import { CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm'

@Entity()
export abstract class BaseTimeEntity {
  @CreateDateColumn({
    type: 'timestamptz',
    comment: '생성 시각',
  })
  public createdAt!: Date

  @UpdateDateColumn({
    type: 'timestamptz',
    comment: '변경 시각',
  })
  public updatedAt!: Date
}
