import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JournalController } from './journal.controller';
import { JournalService } from './journal.service';
import { Journal } from './journal.entity';
import { JournalRepository } from './journal.repository';
import { BranchService } from '../branch/branch.service';
import { AccountingService } from '../accounting_charts/accounting.service';
import { Branch } from '../branch/branch.entity';
import { BranchRepository } from '../branch/branch.repository';
import { AccountingRepository } from '../accounting_charts/accounting.repository';
import { Accounting } from '../accounting_charts/accounting.entity';
import { Attendant } from '../attendant/attendant.entity';
import { AttendantRepository } from '../attendant/attendant.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Journal,
      JournalRepository,
      Branch,
      BranchRepository,
      Accounting,
      AccountingRepository,
      Attendant,
      AttendantRepository
    ]),
  ],
  controllers: [JournalController],
  providers: [JournalService, BranchService, AccountingService]
})
export class JournalModule {}
