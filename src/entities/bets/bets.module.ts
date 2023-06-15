/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BetsService } from './bets.service';
import { BetsController } from './bets.controller';

import { BetsRepository } from './bets.repository';
import { Bets } from './bets.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Bets,
      BetsRepository,
    ]),
  ],
  controllers: [BetsController],
  providers: [BetsService],
})
export class BetsModule {}