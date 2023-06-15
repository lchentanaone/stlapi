import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LottoService } from './lotto.service';
import { LottoController } from './lotto.controller';
import { LottoRepository } from './lotto.repository';
import { Lotto } from './lotto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Lotto, LottoRepository]) ],
  controllers: [LottoController],
  providers: [LottoService],
})
export class LottoModule {}