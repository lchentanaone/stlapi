/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendantService } from './attendant.service';
import { AttendantController } from './attendant.controller';
import { AttendantRepository } from './attendant.repository';

import { Attendant } from './attendant.entity';

import { BranchRepository } from '../branch/branch.repository';
import { Branch } from '../branch/branch.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Attendant,
      BranchRepository,
      Branch,
      AttendantRepository,
    ]),
  ],
  controllers: [AttendantController],
  providers: [AttendantService],
})
export class AttendantModule {}
