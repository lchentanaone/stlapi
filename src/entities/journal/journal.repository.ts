/* eslint-disable prettier/prettier */
import { EntityRepository,Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Journal } from './journal.entity';

@Injectable()
@EntityRepository(Journal)
export class JournalRepository extends Repository<Journal> {}