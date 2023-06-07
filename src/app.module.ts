import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Branch } from './entities/branch/branch.entity';
import { Attendant } from './entities/attendant/attendant.entity';
import { BranchModule } from './entities/branch/branch.module';
import { AttendantModule } from './entities/attendant/attendant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'stlapi',
      entities: [Branch, Attendant],
      synchronize: true,
      autoLoadEntities: true,
    }),
    BranchModule,
    AttendantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
