import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { GetUser } from 'src/auth/decorators/get-user.decorator'
import { User } from 'src/auth/entities/user.entity'

import { CreateMovementDto } from './dto/create-movement.dto'
import { UpdateMovementDto } from './dto/update-movement.dto'
import { Movement } from './entities/movement.entity'
import { MovementsService } from './movements.service'

@UseGuards(AuthGuard())
@Controller('movements')
export class MovementsController {
  private logger = new Logger('MovementsController')
  constructor(private readonly movementService: MovementsService) {}

  @Get()
  getAllMovement() {
    return this.movementService.getAllMovement()
  }

  @Get('/:id')
  getMovementById(@Param('id', ParseIntPipe) id: number): Promise<Movement> {
    return this.movementService.getMovementById(id)
  }

  @Post()
  createMovement(@GetUser() user: User, @Body() createExerciseTypeDto: CreateMovementDto) {
    console.log(user)
    return this.movementService.createMovement(user, createExerciseTypeDto)
  }

  @Patch('/:id')
  updateMovement(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateExerciseDto: UpdateMovementDto,
  ) {
    return this.movementService.updateMovement({ id, ...updateExerciseDto })
  }

  @Delete('/:id')
  deleteMovement(@Param('id', ParseIntPipe) id: number) {
    return this.movementService.deleteMovement(id)
  }
}
