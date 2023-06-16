/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendant } from './attendant.entity';
import { CreateAttendantDto } from './dto/create-attendant.dto';
import { AttendantRepository } from './attendant.repository';
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

    // const branch = await this.branchRepository.findOne({
    //   where: { id: parseInt(_attendant.branch) },
    // });
    // attendant.branch = [branch];
    console.log({ attendant });
    return this.attendantRepository.save(attendant);
    
  }

  async update(
    id: number,
    updateAttendantDto: UpdateAttendantDto,
  ): Promise<Attendant> {
    const attendant = await this.findOne(id);
    const branch = await this.branchRepository.findOne({
      where: { id: parseInt(updateAttendantDto.branch) },
    });
    console.log({
      attendant,
      updateAttendantDto,
    });
    const { name, username, password } = updateAttendantDto;
    attendant.name = name;
    attendant.username = username;
    attendant.password = password;
    attendant.branch = [branch];

    return await attendant.save();
  }

  async remove(id: number): Promise<void> {
    await this.attendantRepository.delete(id);
  }
}
