/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

import { AttendantRepository } from '../attendant/attendant.repository';
import { Attendant } from '../attendant/attendant.entity';
import { BranchRepository } from '../branch/branch.repository';
import { Branch } from '../branch/branch.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserRepository,
      Attendant,
      AttendantRepository,
      Branch,
      BranchRepository,
      
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}