/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateLottoDto {
  @IsInt()
  id: number;

  @IsDate()
  date: Date;

  @IsString()
  draw_time: String;

  @IsString()
  game_mode: string; 

  @IsInt()
  number: number;

  @IsDate()
  createdAt: Date;
}
