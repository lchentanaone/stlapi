/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Attendant } from '../attendant/attendant.entity';
import { AttendantRepository } from '../attendant/attendant.repository';
import { Branch } from '../branch/branch.entity';
import { BranchRepository } from '../branch/branch.repository';
import { BetsRepository } from '../bets/bets.repository';
import { Bets } from '../bets/bets.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
    @InjectRepository(Attendant)
    private attendantRepository: AttendantRepository,
    @InjectRepository(Branch)
    private branchRepository: BranchRepository,
    // @InjectRepository(Bets)
    // private betsRepository: BetsRepository,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['attendant', 'branch']
    });
  }

  async findOne(id: number): Promise<User> {
    const x = this.userRepository.findOne({
      where: {
        id: id,
      },
      relations: ['attendant', 'branch']
    });
    return x;
  }

  async create(_user: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = _user.username;
    user.password = _user.password;
    user.first_name = _user.first_name;
    user.middle_name = _user.middle_name;
    user.last_name = _user.last_name;
    user.position = _user.position;
    user.daily_rental = _user.daily_rental;
    user.status = _user.status

    if(_user.branch_ID) {
      const branch = await this.branchRepository.findOne({
        where: { id: _user.branch_ID},
      });
      user.branch = [branch];
    }
      
    if(_user.attendant_ID) {
      const attendant = await this.attendantRepository.findOne({
        where: { id: _user.attendant_ID},
      });
      user.attendant = [attendant];
    }

    // if(_user.bets_ID) {
    //   const bets = await this.betsRepository.findOne({
    //     where: { id: _user.bets_ID},
    //   });
    //   user.bets = [bets];
    // }

    return this.userRepository.save(user);
  }  

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.findOne(id);
    // const branch = await this.branchRepository.findOne({
    //   where: { id: parseInt(updateUserDto.branch) },
    // });
    const attendant = await this.attendantRepository.findOne({
      where: { id: updateUserDto.attendant },
    });
    console.log({
      user,
      updateUserDto,
    });
    const { first_name, middle_name, last_name, username, password, position, daily_rental} = updateUserDto;
    user.username = username;
    user.password = password;
    user.first_name = first_name;
    user.middle_name = middle_name;
    user.last_name = last_name;
    user.position = position;
    user.daily_rental = daily_rental;
    user.attendant = [attendant];
    // user.branch = [branch];
    
    return await user.save();
  }
 

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
