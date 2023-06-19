import { Module } from '@nestjs/common';
import { TapadaController } from './tapada.controller';
import { TapadaService } from './tapada.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tapada } from './tapada.entity';
import { TapadaRepository } from './tapada.repository';
import { UserRepository } from '../user/user.repository';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { Attendant } from '../attendant/attendant.entity';
import { AttendantRepository } from '../attendant/attendant.repository';
import { Branch } from '../branch/branch.entity';
import { BranchRepository } from '../branch/branch.repository';
import { Bets } from '../bets/bets.entity';
import { BetsRepository } from '../bets/bets.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Tapada,
      TapadaRepository,
      User,
      UserRepository,
      Attendant,
      AttendantRepository,
      Branch,
      BranchRepository,
      Bets,
      BetsRepository,
      
    ]),
  ],
  controllers: [TapadaController],
  providers: [TapadaService, UserService]
})
export class TapadaModule {}
