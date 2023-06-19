/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bets } from './bets.entity';
import { BetsService } from './bets.service';
import { BetsController } from './bets.controller';
import { BetsRepository } from './bets.repository';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { Attendant } from '../attendant/attendant.entity';
import { AttendantRepository } from '../attendant/attendant.repository';
import { BranchRepository } from '../branch/branch.repository';
import { Branch } from '../branch/branch.entity';
import { Expenses } from '../expenses/expenses.entity';
import { ExpensesRepository } from '../expenses/expenses.repository';
import { TapadaRepository } from '../tapada/tapada.repository';
import { Tapada } from '../tapada/tapada.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Bets,
      BetsRepository,
      User,
      UserRepository,
      Attendant,
      AttendantRepository,
      Branch,
      BranchRepository,
      Expenses,
      ExpensesRepository,
      Tapada,
      TapadaRepository,
    ]),
  ],
  controllers: [BetsController],
  providers: [BetsService, UserService],
})
export class BetsModule {}