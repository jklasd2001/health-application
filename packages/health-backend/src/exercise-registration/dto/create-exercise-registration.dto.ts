import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class CreateExerciseRegistrationDto {
  @ApiProperty()
  @IsNumber()
  kg: number

  @ApiProperty()
  @IsNumber()
  reps: number

  @ApiProperty()
  @IsNumber()
  set: number

  @ApiProperty()
  @IsNumber()
  exerciseTime: number

  @ApiProperty()
  @IsNumber()
  routineId: number

  @ApiProperty()
  @IsNumber()
  exerciseId: number
}
