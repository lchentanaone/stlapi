/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate } from '@nestjs/class-validator';
import { Branch } from 'src/entities/branch/branch.entity';

export class CreateBranchDto {
  @IsInt()
  id: number;

  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  attendant: string;

  @IsDate()
  createdAt: Date;
}
