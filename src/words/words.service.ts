import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { WordDtoCreate, WordDtoUpdate } from './word.dto'

@Injectable()
export class WordsService {

  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.word.findMany()
  }

  async getById(id: number) {
    const word = await this.prisma.word.findUnique({
      where: {
        id: id,
      },
    })

    if (!word) throw new NotFoundException('Word not found')

    return word
  }

  async update(dto: WordDtoUpdate) {
    const word = await this.getById(dto.id)

    return this.prisma.word.update({
      where: {
        id: word.id,
      },
      data: {
        name: dto.name,
        defenition: dto.defenition,
        example: dto.example,
        translation: dto.translation,
      },
    })
  }

  create(dto: WordDtoCreate) {
    return this.prisma.word.create({
      data: dto,
    })
  }
}
