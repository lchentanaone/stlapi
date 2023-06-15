import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tapada } from './tapada.entity';
import { CreateTapadaDto } from './dto/create-tapada.dto';
import { UpdateTapadaDto } from './dto/update-tapada.dto';
import { TapadaRepository } from './tapada.repository';
import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class TapadaService {
    constructor(
        @InjectRepository(Tapada)
        private tapadaRepository: TapadaRepository,
        // @InjectRepository(User)
        // private userRepository: UserRepository,
      ) {}
    
      findAll(): Promise<Tapada[]> {
        return this.tapadaRepository.find({
          relations: ['tapada'],
        });
      }
    
      async findOne(id: number): Promise<Tapada> {
        const x = this.tapadaRepository.findOne({
          where: {
            id: id,
          },
          // relations: ['user']
        });
        return x;
      }
    
      async create(_tapada: CreateTapadaDto): Promise<Tapada> {
        const tapada = new Tapada();
        tapada.date = _tapada.date;
        tapada.runner_name = _tapada.runner_name;
        tapada.amount = _tapada.amount;
        tapada.draw_time = _tapada.draw_time;
    
        // const attendant = await this.attendantRepository.findOne({
        //   where: { id: parseInt(_user.attendant) },
        // });
        // user.attendant = [attendant];
        // console.log({ user });
        return this.tapadaRepository.save(tapada);
      }
    
      async update(
        id: number,
        updateTapadaDto: UpdateTapadaDto,
      ): Promise<Tapada> {
        const tapada = await this.findOne(id);
        // const attendant = await this.attendantRepository.findOne({
        //   where: { id: parseInt(updateUserDto.attendant) },
        // });
        console.log({
          tapada,
          updateTapadaDto,
        });
        const { date, runner_name, amount, draw_time} = updateTapadaDto;
        tapada.date = date;
        tapada.runner_name = runner_name;
        tapada.amount = amount;
        tapada.draw_time = draw_time;

        // tapada.user = [User];
    
        return await tapada.save();
      }
    
      async remove(id: number): Promise<void> {
        await this.tapadaRepository.delete(id);
      }
    }