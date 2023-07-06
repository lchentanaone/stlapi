/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateBetsDto } from './create-bets.dto';
import { IsString, IsInt, IsDate, IsOptional} from '@nestjs/class-validator';

export class UpdateBetsDto extends PartialType(CreateBetsDto) {
  @IsInt()
  id: number;

  @IsDate()
  date: Date;

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