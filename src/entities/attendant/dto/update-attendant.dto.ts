/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateAttendantDto } from './create-attendant.dto';
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class UpdateAttendantDto extends PartialType(CreateAttendantDto) {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsOptional()
  password: string;

  @IsInt()
  branch_ID: number;

  @IsDate()
  createdAt: Date;
}
