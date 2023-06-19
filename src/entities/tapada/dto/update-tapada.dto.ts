import { PartialType } from '@nestjs/mapped-types';
import { CreateTapadaDto } from './create-tapada.dto';
import { IsString, IsInt, IsDate, IsOptional} from '@nestjs/class-validator';

export class UpdateTapadaDto extends PartialType(CreateTapadaDto) {
  @IsInt()
  id: number;

  @IsOptional()
  date: string;

  @IsString()
  runner_name: string;

  @IsInt()
  amount: number;

  @IsOptional()
  draw_time: string; 

  @IsInt()
  user_ID: number;

  @IsDate()
  createdAt: Date;
}