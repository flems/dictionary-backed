import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class WordDtoCreate {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsString()
  @IsNotEmpty()
  defenition: string

  @IsString()
  example: string

  @IsString()
  translation: string
}

export class WordDtoFindById {
  @IsNotEmpty()
  @IsNumber()
  id: number
}

export class WordDtoUpdate {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsNotEmpty()
  @IsString()
  name: string

  @IsString()
  @IsNotEmpty()
  defenition: string

  @IsString()
  example: string

  @IsString()
  translation: string
}
