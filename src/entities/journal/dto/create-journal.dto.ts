/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateJournalDto {
  @IsInt()
  id: number;

  @IsDate()
  date: Date;

  @IsInt()
  branch_ID: number; // FK

  @IsString()
  description: string;

  @IsOptional()
  type: string; 

  @IsInt()
  accounting_ID: number;

  @IsInt()
  amount: number;

  @IsDate()
  createdAt: Date;
}
