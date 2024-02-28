import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { WordDtoCreate, WordDtoUpdate } from './word.dto'
import { WordsService } from './words.service'

@Controller('words/:id')
export class WordDetailController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  getById(@Param('id') id: number) {
    return this.wordsService.getById(Number(id))
  }
}

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  getAll() {
    return this.wordsService.getAll()
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: WordDtoCreate) {
    return this.wordsService.create(dto)
  }

  @Patch()
  @UsePipes(new ValidationPipe())
  async update(@Body() dto: WordDtoUpdate) {
    return this.wordsService.update(dto)
  }
}
