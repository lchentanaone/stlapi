/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendant } from './attendant.entity';
import { AttendantRepository } from './attendant.repository';
import { CreateAttendantDto } from './dto/create-attendant.dto';
import { UpdateAttendantDto } from './dto/update-attendant.dto';

import { Branch } from '../branch/branch.entity';
import { BranchRepository } from '../branch/branch.repository';

@Injectable()
export class AttendantService {
  constructor(
    @InjectRepository(Attendant)
    private attendantRepository: AttendantRepository,
    @InjectRepository(Branch)
    private branchRepository: BranchRepository,
  ) {}

  findAll(): Promise<Attendant[]> {
    return this.attendantRepository.find({
      relations: ['branch'],
    });
  }

  async findOne(id: number): Promise<Attendant> {
    const x = this.attendantRepository.findOne({
      where: {
        id: id,
      },
      relations: ['branch'],
    });
    return x;
  }

  async create(_attendant: CreateAttendantDto): Promise<Attendant> {
    const attendant = new Attendant();
    attendant.name = _attendant.name;
    attendant.username = _attendant.username;
    attendant.password = _attendant.password;

    if(_attendant.branch_ID) {
      const branch = await this.branchRepository.findOne({
        where: { id: _attendant.branch_ID},
      });
      attendant.branch = [branch];
    }
      return this.attendantRepository.save(attendant);
    
  }

  async update(id: number, updateAttendantDto: UpdateAttendantDto): Promise<Attendant> {
    const attendant = await this.findOne(id);
 
    const { name, username, password, branch_ID } = updateAttendantDto;
    attendant.name = name;
    attendant.username = username;
    attendant.password = password;
    
    if(branch_ID) {
      const branch = await this.branchRepository.findOne({
        where: { id: branch_ID },
      });
      attendant.branch = [branch];
    }

    return await attendant.save();
  }

  async remove(id: number): Promise<void> {
    await this.attendantRepository.delete(id);
  }
}
