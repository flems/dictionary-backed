import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { WordDetailController, WordsController } from './words.controller'
import { WordsService } from './words.service'

@Module({
  controllers: [WordsController, WordDetailController],
  providers: [WordsService, PrismaService],
})
export class WordsModule {}
