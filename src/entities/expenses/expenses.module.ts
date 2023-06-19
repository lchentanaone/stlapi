import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expenses } from './expenses.entity';
import { ExpensesRepository } from './expenses.repository';
import { UserRepository } from '../user/user.repository';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { Attendant } from '../attendant/attendant.entity';
import { AttendantRepository } from '../attendant/attendant.repository';
import { Branch } from '../branch/branch.entity';
import { BranchRepository } from '../branch/branch.repository';
import { Bets } from '../bets/bets.entity';
import { BetsRepository } from '../bets/bets.repository';
import { TapadaRepository } from '../tapada/tapada.repository';
import { Tapada } from '../tapada/tapada.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Expenses,
      ExpensesRepository,
      User,
      UserRepository,
      Attendant,
      AttendantRepository,
      Branch,
      BranchRepository,
      Bets,
      BetsRepository,
      Tapada,
      TapadaRepository
    ]),
  ],
  controllers: [ExpensesController],
  providers: [ExpensesService, UserService]
})
export class ExpensesModule {}
