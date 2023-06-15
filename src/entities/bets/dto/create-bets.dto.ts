/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateBetsDto {
  @IsInt()
  id: number;

  @IsOptional()
  date: string;

  @IsOptional()
  draw_time: string;

  @IsOptional()
  game_mode: string; 

  @IsInt()
  number: number;

  @IsInt()
  amount: number;

  // @IsInt()
  // user_id: number;

  @IsDate()
  createdAt: Date;
}
