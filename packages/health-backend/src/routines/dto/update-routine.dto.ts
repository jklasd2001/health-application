import { ApiProperty } from '@nestjs/swagger'

import { CreateRoutineDto } from './create-routine.dto'

export class UpdateRoutineDto extends CreateRoutineDto {
  @ApiProperty()
  id: number
}
