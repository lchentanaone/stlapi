/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsIn } from '@nestjs/class-validator';

export class CreateBranchDto {
  @IsInt()
  id: number;

  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsInt()
  attendant_ID: number;

  @IsDate()
  createdAt: Date;
}
