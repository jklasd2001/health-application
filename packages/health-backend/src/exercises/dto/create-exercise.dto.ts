import { ApiProperty } from '@nestjs/swagger'

export class CreateExerciseDto {
  @ApiProperty()
  kg: number

  @ApiProperty()
  set: number

  @ApiProperty()
  rir: number

  @ApiProperty()
  reps: number

  @ApiProperty()
  restTime: number

  @ApiProperty()
  exerciseTypeId: number
}
