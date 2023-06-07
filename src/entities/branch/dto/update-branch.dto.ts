/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateBranchDto } from './create-branch.dto';
import { IsString, IsDate, IsOptional } from '@nestjs/class-validator';

export class UpdateBranchDto extends PartialType(CreateBranchDto) {
  id: number;

  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsOptional()
  address: string;

  @IsOptional()
  attendant: string;

  @IsDate()
  createdAt: Date;
}
