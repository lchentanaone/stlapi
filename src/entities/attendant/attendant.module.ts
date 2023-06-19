/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendantService } from './attendant.service';
import { AttendantController } from './attendant.controller';
import { AttendantRepository } from './attendant.repository';
import { Attendant } from './attendant.entity';
import { BranchRepository } from '../branch/branch.repository';
import { BranchService } from '../branch/branch.service';
import { Branch } from '../branch/branch.entity';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { User } from '../user/user.entity';
import { Bets } from '../bets/bets.entity';
import { BetsRepository } from '../bets/bets.repository';
import { ExpensesRepository } from '../expenses/expenses.repository';
import { Expenses } from '../expenses/expenses.entity';
import { Tapada } from '../tapada/tapada.entity';
import { TapadaRepository } from '../tapada/tapada.repository';
import { Journal } from '../journal/journal.entity';
import { JournalRepository } from '../journal/journal.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Attendant,
      AttendantRepository,
      BranchRepository,
      Branch,
      User,
      UserRepository,
      Bets,
      BetsRepository,
      Expenses,
      ExpensesRepository,
      Tapada,
      TapadaRepository,
      Journal,
      JournalRepository
    ]),
  ],
  controllers: [AttendantController],
  providers: [AttendantService, BranchService, UserService],
})
export default class AttendantModule {}
