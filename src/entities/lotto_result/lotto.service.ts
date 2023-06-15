/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lotto } from './lotto.entity';
import { LottoRepository } from './lotto.repository';
import { CreateLottoDto } from './dto/create-lotto.dto';
import { UpdateLottoDto } from './dto/update-lotto.dto';


@Injectable()
export class LottoService {
  findbyOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Lotto)
    private lottoRepository: LottoRepository,
  ) {}

  // async findAll(): Promise<Lotto[]> {
  //   return await this.lottoRepository.findAll();
 
  // }

  // async findbyOne(id: number): Promise<Lotto> {
  //   const x = this.lottoRepository.findbyOne({
  //     where: {
  //       id: id,
  //     },
  //     // relations: ['']
  //   });
  //   return x;
  // }
  
  async create(_lotto: CreateLottoDto): Promise<Lotto> {
    const lotto = new Lotto();
    lotto.date = _lotto.date;
    lotto.draw_time = _lotto.draw_time;
    lotto.game_mode = _lotto.game_mode;
    lotto.number = _lotto.number;

    // const attendant = await this.attendantRepository.findOne({
    //   where: { id: parseInt(_user.attendant) },
    // });
    // user.attendant = [attendant];
    // console.log({ lotto });
    return this.lottoRepository.save(lotto);
  }

  // async update(
  //   id: number,
  //   updateLottoDto: UpdateLottoDto,
  // ): Promise<Lotto> {
  //   const lotto = await this.findbyOne(id);
  //   // const attendant = await this.attendantRepository.findOne({
  //   //   where: { id: parseInt(updateUserDto.attendant) },
  //   // });
  //   console.log({
  //     lotto,
  //     updateLottoDto,
  //   });
  //   const { draw_time, game_mode, number} = updateLottoDto;
  //   lotto.draw_time = draw_time;
  //   lotto.game_mode = game_mode;
  //   lotto.number = number;
   
  //   return await lotto.save();
  // }

  async remove(id: number): Promise<void> {
    await this.lottoRepository.delete(id);
  }
}
