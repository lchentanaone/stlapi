import { PartialType } from '@nestjs/mapped-types';
import { CreateJournalDto } from './create-journal.dto';
import { IsString, IsInt, IsDate, IsOptional} from '@nestjs/class-validator';

export class UpdateJournalDto extends PartialType(CreateJournalDto) {
    @IsInt()
    id: number;
  
    @IsOptional()
    date: string;
  
    // @IsInt()
    // branch_code: number; // FK
  
    @IsString()
    description: string;
  
    @IsOptional()
    type: string; 
  
    // @IsInt()
    // accounting_chart: number;
  
    @IsInt()
    amount: number;
  
    @IsDate()
    createdAt: Date;
}