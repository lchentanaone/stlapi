/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { BranchRepository } from './branch.repository';
import { Branch } from './branch.entity';
import { Attendant } from '../attendant/attendant.entity';
import { AttendantService } from '../attendant/attendant.service';
import { AttendantRepository } from '../attendant/attendant.repository';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { User } from '../user/user.entity';
import { BetsRepository } from '../bets/bets.repository';
import { Bets } from '../bets/bets.entity';
import { ExpensesRepository } from '../expenses/expenses.repository';
import { Expenses } from '../expenses/expenses.entity';
import { Tapada } from '../tapada/tapada.entity';
import { TapadaRepository } from '../tapada/tapada.repository';
import { JournalService } from '../journal/journal.service';
import { Journal } from '../journal/journal.entity';
import { JournalRepository } from '../journal/journal.repository';
import { Accounting } from '../accounting_charts/accounting.entity';
import { AccountingRepository } from '../accounting_charts/accounting.repository';
import { AccountingService } from '../accounting_charts/accounting.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Branch,
      BranchRepository,
      Attendant,
      AttendantRepository,
      User,
      UserRepository,
      Bets,
      BetsRepository,
      Expenses,
      ExpensesRepository,
      Tapada,
      TapadaRepository,
      Journal,
      JournalRepository,
      Accounting,
      AccountingRepository
    ]),
  ],
  controllers: [BranchController],
  providers: [BranchService, AttendantService, UserService, JournalService, AccountingService ]
})
export class BranchModule {}
