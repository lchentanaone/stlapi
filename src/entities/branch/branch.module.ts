/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { AttendantService } from '../attendant/attendant.service';
import { Branch } from './branch.entity';
import { Attendant } from '../attendant/attendant.entity';
import { AttendantRepository } from '../attendant/attendant.repository';
import { BranchRepository } from './branch.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Branch,
      Attendant,
      AttendantRepository,
      BranchRepository,
    ]),
  ],
  controllers: [BranchController],
  providers: [BranchService, AttendantService],
})
export class BranchModule {}
