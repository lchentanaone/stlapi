/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateBranchDto } from './create-branch.dto';
import { IsString, IsDate, IsOptional, IsInt } from '@nestjs/class-validator';

export class UpdateBranchDto extends PartialType(CreateBranchDto) {
  id: number;

  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsOptional()
  address: string;

  @IsInt()
  attendant_ID: number;

  @IsDate()
  createdAt: Date;
}
