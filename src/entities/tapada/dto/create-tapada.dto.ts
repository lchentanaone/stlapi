/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateTapadaDto {
  @IsInt()
  id: number;

  @IsOptional()
  date: string;

  @IsString()
  runner_name: string;

  @IsInt()
  amount: number;

  @IsOptional()
  draw_time: string; 

  @IsInt()
  user_ID: number;

  @IsDate()
  createdAt: Date;
}
