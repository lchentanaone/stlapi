/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/authentication/auth.module';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Branch } from './entities/branch/branch.entity';
import { BranchModule } from './entities/branch/branch.module';
import { Attendant } from './entities/attendant/attendant.entity';
import  AttendantModule  from './entities/attendant/attendant.module';
import { User } from './entities/user/user.entity';
import { UserModule } from './entities/user/user.module';
import { Lotto } from './entities/lotto_result/lotto.entity';
import { LottoModule } from './entities/lotto_result/lotto.module';
import { Bets } from './entities/bets/bets.entity';
import { BetsModule } from './entities/bets/bets.module';
import { Expenses } from './entities/expenses/expenses.entity';
import { ExpensesModule } from './entities/expenses/expenses.module';
import { Tapada } from './entities/tapada/tapada.entity';
import { TapadaModule } from './entities/tapada/tapada.module';
import { Journal } from './entities/journal/journal.entity';
import { JournalModule } from './entities/journal/journal.module';
import { AccountingModule } from './entities/accounting_charts/accounting.module';
import { Accounting } from './entities/accounting_charts/accounting.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        // general
        Branch, 
        Attendant, 
        User, 
        Lotto, 
        Bets, 
        Expenses, 
        Journal, 
        Tapada, 
        Accounting 
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    // general
    AuthModule,
    BranchModule,
    AttendantModule,
    UserModule,
    LottoModule,
    BetsModule,
    ExpensesModule,
    TapadaModule,
    JournalModule,
    AccountingModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
