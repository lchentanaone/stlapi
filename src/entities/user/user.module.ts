/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

import { Attendant } from '../attendant/attendant.entity';
import { AttendantRepository } from '../attendant/attendant.repository';
import { AttendantService } from '../attendant/attendant.service';
import { Branch } from '../branch/branch.entity';
import { BranchRepository } from '../branch/branch.repository';
import { BranchService } from '../branch/branch.service';
import { BetsModule } from '../bets/bets.module';
import { Bets } from '../bets/bets.entity';
import { BetsRepository } from '../bets/bets.repository';
import { BetsService } from '../bets/bets.service';
import { Expenses } from '../expenses/expenses.entity';
import { ExpensesRepository } from '../expenses/expenses.repository';
import { ExpensesService } from '../expenses/expenses.service';
import { TapadaRepository } from '../tapada/tapada.repository';
import { Tapada } from '../tapada/tapada.entity';
import { TapadaService } from '../tapada/tapada.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserRepository,
      Attendant,
      AttendantRepository,
      Branch,
      BranchRepository,
      Bets,
      BetsRepository,
      Expenses,
      ExpensesRepository,
      Tapada,
      TapadaRepository
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, BranchService, AttendantService, BetsService, ExpensesService,TapadaService, ],
})
export class UserModule {}