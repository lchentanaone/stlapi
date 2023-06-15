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
    // @InjectRepository(User)
    // private userRepository: UserRepository,
  ) 
  {}

  async findAll(): Promise<Expenses[]> {
    return this.expensesRepository.find({
      relations: ['expenses'],
    });
  }

  async findOne(id: number): Promise<Expenses> {
    const x = this.expensesRepository.findOne({
      where: {
        id: id,
      },
    //   relations: ['user_id']
    });
    return x;
  }

  async create(_expenses: CreateExpensesDto): Promise<Expenses> {
    const expenses = new Expenses();
    expenses.date = _expenses.date;
    expenses.amount = _expenses.amount;
    expenses.type = _expenses.type;
    

    // const attendant = await this.attendantRepository.findOne({
    //   where: { id: parseInt(_user.attendant_id) },
    // });
    // const branch = await this.branchRepository.findOne({
    //   where: { id: parseInt(_user.branch_code) },
    // });
    // user.attendant_id= [attendant];
    // user.branch_code = [branch];
    // console.log({ user });
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
