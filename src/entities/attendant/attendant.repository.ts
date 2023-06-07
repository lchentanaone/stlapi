/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Attendant } from './attendant.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(Attendant)
export class AttendantRepository extends Repository<Attendant> {}
