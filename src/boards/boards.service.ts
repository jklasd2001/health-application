import { Injectable, NotFoundException } from '@nestjs/common'
import { v1 as uuid } from 'uuid'

import { Board, BoardStatus } from './boards.model'
import { CreateBoardDto } from './dto'
import { UpdateBoardStatus } from './dto/update.board.dto'

@Injectable()
export class BoardsService {
  private boards: Board[] = []

  getAllBoards(): Board[] {
    return this.boards
  }

  createBoard({ title, description }: CreateBoardDto) {
    const board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    }
    this.boards = [...this.boards, board]
    return board
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id)

    if (!found) {
      throw new NotFoundException('123123i0dfjiosj')
    }
    return found
  }

  deleteBoardById(id: string): void {
    const found = this.getBoardById(id)

    if (!found) {
      throw new NotFoundException(`ID가 없다 ${id}`)
    }

    this.boards = this.boards.filter((board) => board.id !== id)
  }

  updateBoardStatus({ id, status }: UpdateBoardStatus): Board {
    const board = this.getBoardById(id)
    board.status = status

    return board
  }
}
