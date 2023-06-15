/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateJournalDto {
  @IsInt()
  id: number;

  @IsOptional()
  date: string;

  // @IsInt()
  // branch_code: number; // FK

  @IsString()
  description: string;

  @IsOptional()
  type: string; 

  // @IsInt()
  // accounting_chart: number;

  @IsInt()
  amount: number;

  @IsDate()
  createdAt: Date;
}
