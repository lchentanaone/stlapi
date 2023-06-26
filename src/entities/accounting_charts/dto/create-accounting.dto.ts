/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateAccountingDto {
  @IsInt()
  id: number;

  @IsString()
  account_title: string;

  @IsOptional()
  classification: string;

  @IsOptional()
  group: string;

  @IsOptional()
  type: string;

  @IsInt()
  journal_ID: number;

  @IsDate()
  createdAt: Date;
}
