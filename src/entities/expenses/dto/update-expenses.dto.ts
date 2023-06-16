import { PartialType } from '@nestjs/mapped-types';
import { CreateExpensesDto } from './create-expenses.dto';
import { IsInt, IsDate, IsOptional, IsString} from '@nestjs/class-validator';

export class UpdateExpensesDto extends PartialType(CreateExpensesDto) {
    @IsInt()
    id: number;
  
    @IsString()
    date: string;
  
    @IsInt()
    amount: number;
  
    @IsOptional()
    type: string;
  
  
    @IsDate()
    createdAt: Date;
}