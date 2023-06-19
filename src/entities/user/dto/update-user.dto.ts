/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsInt()
  id: number;

  @IsInt()
  branch_ID: number;

  @IsInt()
  attendant_ID: number;

  @IsInt()
  bets: number;

  @IsString()
  username: string;

  @IsString()
  password: string; 

  @IsString()
  first_name: string;

  @IsString()
  middle_name: string;

  @IsString()
  last_name: string;

  @IsString()
  position: string;

  @IsInt()
  daily_rental: number;

  @IsString()
  status: string;

  @IsDate()
  createdAt: Date;
}