import { EntityRepository,Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Accounting } from './accounting.entity';

@Injectable()
@EntityRepository(Accounting)
export class AccountingRepository extends Repository<Accounting> {}