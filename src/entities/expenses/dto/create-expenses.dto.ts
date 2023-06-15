/* eslint-disable prettier/prettier */
import { IsInt, IsDate, IsOptional, IsString } from '@nestjs/class-validator';

export class CreateExpensesDto {
  @IsInt()
  id: number;

  @IsString()
  date: string;

  @IsInt()
  amount: number;

  @IsOptional()
  type: string;

  // @IsInt()
  // user_id: number; 

  @IsDate()
  createdAt: Date;
}
