/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateAttendantDto {
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
