import { ApiProperty } from '@nestjs/swagger'

import { CreateExerciseDto } from './create-exercise.dto'

export class UpdateExerciseDto extends CreateExerciseDto {
  @ApiProperty()
  id: number
}
