import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common'

import { GetUser } from 'src/auth/decorators/get-user.decorator'
import { User } from 'src/auth/entities/user.entity'

import { CreateMovementDto } from './dto/create-movement.dto'
import { UpdateMovementDto } from './dto/update-movement.dto'
import { Movement } from './entities/movement.entity'
import { MovementsService } from './movements.service'

@Controller('movements')
export class MovementsController {
  constructor(private readonly movementService: MovementsService) {}

  @Get()
  getAllMovement(@GetUser() user: User) {
    return this.movementService.getAllMovement(user)
  }

  @Get('/:id')
  getMovementById(@Param('id', ParseIntPipe) id: number, @GetUser() user: User): Promise<Movement> {
    return this.movementService.getMovementById(user, id)
  }

  @Post()
  createMovement(@GetUser() user: User, @Body() createExerciseTypeDto: CreateMovementDto) {
    return this.movementService.createMovement(user, createExerciseTypeDto)
  }

  @Patch('/:id')
  updateMovement(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
    @Body() updateExerciseDto: UpdateMovementDto,
  ) {
    return this.movementService.updateMovement(user, { id, ...updateExerciseDto })
  }

  @Delete('/:id')
  deleteMovement(@Param('id', ParseIntPipe) id: number) {
    return this.movementService.deleteMovement(id)
  }
}
