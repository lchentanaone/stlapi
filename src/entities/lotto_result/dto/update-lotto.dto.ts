/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateLottoDto } from './create-lotto.dto';
import { IsString, IsInt, IsDate, IsOptional} from '@nestjs/class-validator';

export class UpdateLottoDto extends PartialType(CreateLottoDto) {
  @IsInt()
  id: number;

  @IsDate()
  date: Date;

  @IsDate()
  draw_time: Date;

  @IsString()
  game_mode: string; 

  @IsInt()
  number: number;

}