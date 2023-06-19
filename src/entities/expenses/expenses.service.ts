/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expenses } from './expenses.entity';
import { ExpensesRepository } from './expenses.repository';
import { CreateExpensesDto } from './dto/create-expenses.dto';
import { UpdateExpensesDto } from './dto/update-expenses.dto';

import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expenses)
    private expensesRepository: ExpensesRepository,
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) 
  {}

  async findAll(): Promise<Expenses[]> {
    return this.expensesRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: number): Promise<Expenses> {
    const x = this.expensesRepository.findOne({
      where: {
        id: id,
      },
      relations: ['user']
    });
    return x;
  }

  async create(_expenses: CreateExpensesDto): Promise<Expenses> {
    const expenses = new Expenses();
    expenses.date = _expenses.date;
    expenses.amount = _expenses.amount;
    expenses.type = _expenses.type;
    
    if(_expenses.user_ID) {
      const user = await this.userRepository.findOne({
        where: { id: _expenses.user_ID},
      });
      expenses.user = [user];
    }
    return this.expensesRepository.save(expenses);

  }

  async update(
    id: number,
    expensesData: UpdateExpensesDto,
  ) : Promise<Expenses> {
    const expenses = await this.findOne(id);
    // const user = await this.userRepository.findOne({
    //   where: { id: parseInt(updateExpensesDto.user_id) },
    // });
    // console.log({
    //   expenses,
    //   updateExpensesDto,
    // });
    // const { date, amount, type } = updateExpensesDto;
    // expenses.date = date;
    // expenses.amount = amount;
    // expenses.type = type;
    
    return await expenses.save();
  }
 

  async remove(id: number): Promise<void> {
    await this.expensesRepository.delete(id);
  }
}
