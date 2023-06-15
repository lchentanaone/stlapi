import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Accounting } from './accounting.entity';
import { CreateAccountingDto } from './dto/create-accounting.dto';
import { UpdateAccountingDto } from './dto/update-accounting.dto';
import { AccountingRepository } from './accounting.repository';
import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AccountingService {
    constructor(
        @InjectRepository(Accounting)
        private accountingRepository: AccountingRepository,
        // @InjectRepository(User)
        // private userRepository: UserRepository,
      ) {}
    
      findAll(): Promise<Accounting[]> {
        return this.accountingRepository.find({
          relations: ['accounting'],
        });
      }
    
      async findOne(id: number): Promise<Accounting> {
        const x = this.accountingRepository.findOne({
          where: {
            id: id,
          },
          // relations: ['user']
        });
        return x;
      }
    
      async create(_accounting: CreateAccountingDto): Promise<Accounting> {
        const accounting = new Accounting();
        accounting.account_title = _accounting.account_title;
        accounting.classification = _accounting.classification;
        accounting.group = _accounting.group;
        accounting.type = _accounting.type;
    
        // const attendant = await this.attendantRepository.findOne({
        //   where: { id: parseInt(_user.attendant) },
        // });
        // user.attendant = [attendant];
        // console.log({ user });
        return this.accountingRepository.save(accounting);
      }
    
      async update(
        id: number,
        updateAccountingDto: UpdateAccountingDto,
      ): Promise<Accounting> {
        const accounting = await this.findOne(id);
        // const attendant = await this.attendantRepository.findOne({
        //   where: { id: parseInt(updateUserDto.attendant) },
        // });
        console.log({
          accounting,
          updateAccountingDto,
        });
        const { account_title, classification, group, type } = updateAccountingDto;
        accounting.account_title = account_title;
        accounting.classification = classification;
        accounting.group = group;
        accounting.type = type;

        // tapada.user = [User];
    
        return await accounting.save();
      }
    
      async remove(id: number): Promise<void> {
        await this.accountingRepository.delete(id);
      }
    }