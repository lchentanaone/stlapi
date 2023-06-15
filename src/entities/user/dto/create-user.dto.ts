/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateUserDto {
  @IsInt()
  id: number;

  // @IsString()
  // branch_code: string;

  // @IsString()
  // attendant_id: string;

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
