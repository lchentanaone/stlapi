import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Journal } from './journal.entity';
import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';
import { JournalRepository } from './journal.repository';
import { Branch } from '../branch/branch.entity';
import { BranchRepository } from '../branch/branch.repository';
import { Accounting } from '../accounting_charts/accounting.entity';
import { AccountingRepository } from '../accounting_charts/accounting.repository';

@Injectable()
export class JournalService {
    constructor(
        @InjectRepository(Journal)
        private journalRepository: JournalRepository,
        @InjectRepository(Branch)
        private branchRepository: BranchRepository,
        @InjectRepository(Accounting)
        private accountingRepository: AccountingRepository,
      ) {}
    
      findAll(): Promise<Journal[]> {
        return this.journalRepository.find({
          relations: ['branch', 'accounting']
        });
      }
    
      async findOne(id: number): Promise<Journal> {
        const x = this.journalRepository.findOne({
          where: {
            id: id,
          },
          relations: ['branch', 'accounting']
        });
        return x;
      }
    
      async create(_journal: CreateJournalDto): Promise<Journal> {
        const journal = new Journal();
        journal.date = _journal.date;
        journal.description = _journal.description;
        journal.type = _journal.type;
        journal.amount = _journal.amount;
    
        if(_journal.branch_ID) {
          const branch = await this.branchRepository.findOne({
            where: { id: _journal.branch_ID},
          });
          journal.branch = [branch];
        }

        if(_journal.accounting_ID) {
          const accounting = await this.accountingRepository.findOne({
            where: { id: _journal.accounting_ID},
          });
          journal.accounting = [accounting];
        }

        return this.journalRepository.save(journal);
      }
    
      async update(
        id: number,
        updateJournalDto: UpdateJournalDto,
      ): Promise<Journal> {
        const journal = await this.findOne(id);
        // const journal = await this.journalRepository.findOne({
        //   where: { id: parseInt(updateUserDto.journal) },
        // });
        console.log({
          journal,
          updateJournalDto,
        });
        const { date, description, type, amount} = updateJournalDto;
        journal.date = date;
        journal.description = description;
        journal.type = type;
        journal.amount = amount;

        // journal.user = [User];
    
        return await journal.save();
      }
    
      async remove(id: number): Promise<void> {
        await this.journalRepository.delete(id);
      }
    }
