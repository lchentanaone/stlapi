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
        @InjectRepository(User)
        private userRepository: UserRepository,
      ) {}
    
      findAll(): Promise<Tapada[]> {
        return this.tapadaRepository.find({
          relations: ['user'],
        });
      }
    
      async findOne(id: number): Promise<Tapada> {
        const x = this.tapadaRepository.findOne({
          where: {
            id: id,
          },
          relations: ['user']
        });
        return x;
      }
    
      async create(_tapada: CreateTapadaDto): Promise<Tapada> {
        const tapada = new Tapada();
        tapada.date = _tapada.date;
        tapada.runner_name = _tapada.runner_name;
        tapada.amount = _tapada.amount;
        tapada.draw_time = _tapada.draw_time;
    
        if(_tapada.user_ID) {
          const user = await this.userRepository.findOne({
            where: { id: _tapada.user_ID},
          });
          tapada.user = [user];
        }
    
        return this.tapadaRepository.save(tapada);
      }
    
      async update(
        id: number,
        updateTapadaDto: UpdateTapadaDto,
      ): Promise<Tapada> {
        const tapada = await this.findOne(id);
        
        const { date, runner_name, amount, draw_time, user_ID} = updateTapadaDto;
        tapada.date = date;
        tapada.runner_name = runner_name;
        tapada.amount = amount;
        tapada.draw_time = draw_time;

        if(user_ID) {
          const user = await this.userRepository.findOne({
            where: { id: user_ID },
          });
          tapada.user = [user];
        }
    
        return await tapada.save();
      }
    
      async remove(id: number): Promise<void> {
        await this.tapadaRepository.delete(id);
      }
    }