import { Module } from '@nestjs/common';
import { AccountingController } from './accounting.controller';
import { AccountingService } from './accounting.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accounting } from './accounting.entity';
import { AccountingRepository } from './accounting.repository';

@Module({
  imports: [
      TypeOrmModule.forFeature([
      Accounting,
      AccountingRepository,
    ]),
  ],
  controllers: [AccountingController],
  providers: [AccountingService]
})
export class AccountingModule {}
