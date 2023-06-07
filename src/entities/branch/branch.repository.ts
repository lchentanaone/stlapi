/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Branch } from './branch.entity';

@Injectable()
@EntityRepository(Branch)
export class BranchRepository extends Repository<Branch> {}
