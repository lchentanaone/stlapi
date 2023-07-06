import {
    Controller,
    Post,
    Get,
    Param,
    Body,
    Delete,
    Patch,
    Res,
    Inject,
    forwardRef
  } from '@nestjs/common';
  import { CreateBetsDto } from './dto/create-bets.dto';
  import { UpdateBetsDto } from './dto/update-bets.dto';
  import { BetsService } from './bets.service';
  import { UserService } from '../user/user.service';

  
  @Controller('bets')
  export class BetsController {
    constructor(
      private betsService: BetsService,
      @Inject(forwardRef(() => UserService))
      private readonly userService: UserService,
    ) {}
  
    @Get()
    async findAll() {
      return this.betsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.betsService.findOne(+id);
    }
  
    @Get('date/:date')
    async findByDate(@Param('date') date: Date) {
      return this.betsService.findByDate(date);
    }

    @Post()
    create(@Body() createBetsDto: CreateBetsDto) {
      return this.betsService.create(createBetsDto);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: number,
      @Body() updateBetsDto: UpdateBetsDto,
    ) {
      this.betsService.update(+id, updateBetsDto);
      return 'Updated';
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.betsService.remove(+id);
      return 'Deleted!';
    }
  }
  