import { IsNumber } from 'class-validator'

export class CreateExerciseRegistrationDto {
  @IsNumber()
  kg: number

  @IsNumber()
  reps: number

  @IsNumber()
  set: number

  @IsNumber()
  exerciseTime: number

  @IsNumber()
  routineId: number

  @IsNumber()
  exerciseId: number
}
