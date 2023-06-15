import { Module } from '@nestjs/common';
import { TapadaController } from './tapada.controller';
import { TapadaService } from './tapada.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tapada } from './tapada.entity';
import { TapadaRepository } from './tapada.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Tapada,
      TapadaRepository,
    ]),
  ],
  controllers: [TapadaController],
  providers: [TapadaService]
})
export class TapadaModule {}
