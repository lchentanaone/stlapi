/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lotto } from './lotto.entity';
import { LottoRepository } from './lotto.repository';
import { CreateLottoDto } from './dto/create-lotto.dto';
import { UpdateLottoDto } from './dto/update-lotto.dto';


@Injectable()
export class LottoService {
  constructor(
    @InjectRepository(Lotto)
    private lottoRepository: LottoRepository,
  ) {}

  findAll(): Promise<Lotto[]> {
    return this.lottoRepository.find();
  }

  async findOne(id: number): Promise<Lotto> {
    const x = this.lottoRepository.findOne({
      where: {
        id: id,
      },
    });
    return x;
  }

  async findByDate(date: Date): Promise<Lotto[]> {
    return await this.lottoRepository.find({
      where: {
        date
      },
    });
  }
  
  async create(_lotto: CreateLottoDto): Promise<Lotto> {
    const lotto = new Lotto();
    lotto.date = _lotto.date;
    lotto.draw_time = _lotto.draw_time;
    lotto.game_mode = _lotto.game_mode;
    lotto.number = _lotto.number;

    console.log({ lotto });
    return this.lottoRepository.save(lotto);
  }

  async update(
    id: number,
    updateLottoDto: UpdateLottoDto,
  ): Promise<Lotto> {
    const lotto = await this.findOne(id);

    const { draw_time, game_mode, number} = updateLottoDto;
    lotto.draw_time = draw_time;
    lotto.game_mode = game_mode;
    lotto.number = number;
   
    return await lotto.save();
  }

  async remove(id: number): Promise<void> {
    await this.lottoRepository.delete(id);
  }
}
