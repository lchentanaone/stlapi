/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsInt()
  branch_ID: number;

  @IsInt()
  attendant_ID: number;

  @IsInt()
  bets_ID: number;

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
