import { BadRequestException, PipeTransform } from '@nestjs/common'

import { BoardStatus } from '../boards.model'

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC]

  private isStatusValid(status: string) {
    return this.StatusOptions.indexOf(status as BoardStatus) !== -1
  }

  transform(value: string) {
    value = value.toUpperCase()

    if (!this.isStatusValid(value)) {
      throw new BadRequestException('잘못된 Status 값을 넣었습니다')
    }
    return value
  }
}
