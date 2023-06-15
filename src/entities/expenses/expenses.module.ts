import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expenses } from './expenses.entity';
import { ExpensesRepository } from './expenses.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Expenses,
      ExpensesRepository,
    
    ]),
  ],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})
export class ExpensesModule {}
