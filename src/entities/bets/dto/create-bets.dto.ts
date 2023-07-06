/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateBetsDto {
  @IsInt()
  id: number;

  @IsDate()
  date: Date

  @IsString()
  draw_time: string;

  @IsOptional()
  game_mode: string; 

  @IsInt()
  number: number;

  @IsInt()
  amount: number;

  @IsInt()
  user_ID: number;

  @IsDate()
  createdAt: Date;
}
