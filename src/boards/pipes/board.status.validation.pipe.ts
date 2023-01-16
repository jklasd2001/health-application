import { ArgumentMetadata, PipeTransform } from '@nestjs/common'

import { BoardStatus } from '../boards.model'

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC]

  transform(value: unknown, metadata: ArgumentMetadata) {
    console.log(value)
    console.log(metadata)
    return value
  }
}
