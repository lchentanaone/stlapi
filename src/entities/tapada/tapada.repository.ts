/* eslint-disable prettier/prettier */
import { EntityRepository,Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Tapada } from './tapada.entity';

@Injectable()
@EntityRepository(Tapada)
export class TapadaRepository extends Repository<Tapada> {}