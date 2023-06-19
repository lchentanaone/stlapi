import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Accounting } from './accounting.entity';
import { CreateAccountingDto } from './dto/create-accounting.dto';
import { UpdateAccountingDto } from './dto/update-accounting.dto';
import { AccountingRepository } from './accounting.repository';

@Injectable()
export class AccountingService {
    constructor(
        @InjectRepository(Accounting)
        private accountingRepository: AccountingRepository,
       
      ) {}
    
      findAll(): Promise<Accounting[]> {
        return this.accountingRepository.find({
        });
      }
    
      async findOne(id: number): Promise<Accounting> {
        const x = this.accountingRepository.findOne({
          where: {
            id: id,
          },
        });
        return x;
      }
    
      async create(_accounting: CreateAccountingDto): Promise<Accounting> {
        const accounting = new Accounting();
        accounting.account_title = _accounting.account_title;
        accounting.classification = _accounting.classification;
        accounting.group = _accounting.group;
        accounting.type = _accounting.type;
    
        return this.accountingRepository.save(accounting);
      }
    
      async update(
        id: number,
        updateAccountingDto: UpdateAccountingDto,
      ): Promise<Accounting> {
        const accounting = await this.findOne(id);
  
        const { account_title, classification, group, type } = updateAccountingDto;
        accounting.account_title = account_title;
        accounting.classification = classification;
        accounting.group = group;
        accounting.type = type;

        return await accounting.save();
      }
    
      async remove(id: number): Promise<void> {
        await this.accountingRepository.delete(id);
      }
    }