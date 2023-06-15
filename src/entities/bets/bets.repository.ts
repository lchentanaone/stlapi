/* eslint-disable prettier/prettier */
import { EntityRepository,Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Bets } from './bets.entity';

@Injectable()
@EntityRepository(Bets)
export class BetsRepository extends Repository<Bets> {
  
}