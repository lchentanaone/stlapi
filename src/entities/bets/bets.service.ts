/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bets } from './bets.entity';
import { BetsRepository } from './bets.repository';
import { CreateBetsDto } from './dto/create-bets.dto';
import { UpdateBetsDto } from './dto/update-bets.dto';

import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class BetsService {
  constructor( 
    @InjectRepository(Bets)
    private betsRepository: BetsRepository,
    // @InjectRepository(User)
    // private userRepository: UserRepository,
  ) {}

  async findAll(): Promise<Bets[]> {
    return this.betsRepository.find({
      // relations: ['user_id'],
    });
  }

  async findOne(id: number): Promise<Bets> {
    const x = this.betsRepository.findOne({
      where: {
        id: id,
      },
      // relations: ['user_id']
    });
    return x;
  }

  async create(_bets: CreateBetsDto): Promise<Bets> {
    const bets = new Bets();
    bets.date = _bets.date;
    bets.draw_time = _bets.draw_time;
    bets.game_mode = _bets.game_mode;
    bets.number = _bets.number;
    bets.amount = _bets.amount;
   
    // const user = await this.userRepository.findOne({
    //   where: { id: parseInt(_bets.user_id) },
    // });
    // bets.user = [user];
    // console.log({ user });
    return this.betsRepository.save(bets);
  }

  // async update(
  //   id: number,
  //   updateBetsDto: UpdateBetsDto,
  // ): Promise<Bets> {
  //   const bets = await this.findOne(id);
  //   const user = await this.betsRepository.findOne({
  //     where: { id: parseInt(updateBetsDto.bets) },
  //   });
  //   console.log({
  //     bets,
  //     updateBetsDto,
  //   });
  //   const { draw_time, game_mode, number } = updateBetsDto;
  //   bets.draw_time = draw_time;
  //   bets.game_mode = game_mode;
  //   bets.number = number;

    // bets.id = [user];

  //   return await bets.save();
  // }

  // async remove(id: number): Promise<void> {
  //   await this.betsRepository.delete(id);
  // }
}
