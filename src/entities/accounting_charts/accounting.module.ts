import { Module } from '@nestjs/common';
import { AccountingController } from './accounting.controller';
import { AccountingService } from './accounting.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accounting } from './accounting.entity';
import { AccountingRepository } from './accounting.repository';
import { Journal } from '../journal/journal.entity';
import { JournalRepository } from '../journal/journal.repository';
import { JournalService } from '../journal/journal.service';
import { Branch } from '../branch/branch.entity';
import { BranchRepository } from '../branch/branch.repository';

@Module({
  imports: [
      TypeOrmModule.forFeature([
      Accounting,
      AccountingRepository,
      Journal,
      JournalRepository,
      Branch,
      BranchRepository,
    
    ]),
  ],
  controllers: [AccountingController],
  providers: [AccountingService, JournalService]
})
export class AccountingModule {}
