/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from './branch.entity';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { BranchRepository } from './branch.repository';
import { Attendant } from '../attendant/attendant.entity';
import { AttendantRepository } from '../attendant/attendant.repository';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch)
    private branchRepository: BranchRepository,
    @InjectRepository(Attendant)
    private attendantRepository: AttendantRepository,
  ) {}

  findAll(): Promise<Branch[]> {
    return this.branchRepository.find({
      relations: ['attendant'],
    });
  }

  async findOne(id: number): Promise<Branch> {
    const x = this.branchRepository.findOne({
      where: {
        id: id,
      },
      relations: ['attendant'],
    });
    return x;
  }

  async create(_branch: CreateBranchDto): Promise<Branch> {
    const branch = new Branch();
    branch.code = _branch.code;
    branch.name = _branch.name;
    branch.address = _branch.address;

    const attendant = await this.attendantRepository.findOne({
      where: { id: parseInt(_branch.attendant) },
    });
    branch.attendant = [attendant];
    console.log({ attendant });

    return this.branchRepository.save(branch);
  }

  async update(id: number, updateBranchDto: UpdateBranchDto): Promise<Branch> {
    const branch = await this.findOne(id);
    const attendant = await this.attendantRepository.findOne({
      where: { id: parseInt(updateBranchDto.attendant) },
    });
    console.log({
      branch,
      updateBranchDto,
    });
    const { code, name, address } = updateBranchDto;
    branch.code = code;
    branch.name = name;
    branch.address = address;
    branch.attendant = [attendant];

    return await branch.save();
  }

  async remove(id: number): Promise<void> {
    await this.branchRepository.delete(id);
  }
}
