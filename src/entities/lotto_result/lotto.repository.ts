/* eslint-disable prettier/prettier */
import { EntityRepository,Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Lotto } from './lotto.entity';

@Injectable()
@EntityRepository(Lotto)
export class LottoRepository extends Repository<Lotto> {}
