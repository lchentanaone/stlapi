import { PartialType } from '@nestjs/mapped-types';
import { CreateExpensesDto } from './create-expenses.dto';
import { IsInt, IsDate, IsOptional, IsString} from '@nestjs/class-validator';

export class UpdateExpensesDto extends PartialType(CreateExpensesDto) {
    @IsInt()
    id: number;
  
    @IsDate()
    date: Date;
  
    @IsOptional()
    type: string;

    @IsOptional()
    status: string;

    @IsInt()
    amount: number;
  
    @IsInt()
    user_ID: number; 
  
    @IsDate()
    createdAt: Date;
}