/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Expenses } from './expenses.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(Expenses)
export class ExpensesRepository extends Repository<Expenses> {}