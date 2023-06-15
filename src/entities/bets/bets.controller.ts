import {
    Controller,
    Post,
    Get,
    Param,
    Body,
    Delete,
    Patch,
    Res,
  } from '@nestjs/common';
  import { CreateBetsDto } from './dto/create-bets.dto';
  import { UpdateBetsDto } from './dto/update-bets.dto';
  import { BetsService } from './bets.service';
  
  @Controller('bets')
  export class BetsController {
    constructor(private betsService: BetsService) {}
  
    // @Get()
    // async fillAll() {
    //   return this.betsService.findAll();
    // }
  
    // @Get(':id')
    // async findbyOne(@Param('id') id: number) {
    //   return this.betsService.findbyOne(+id);
    // }
  
    @Post()
    create(@Body() createBetsDto: CreateBetsDto) {
      return this.betsService.create(createBetsDto);
    }
  
    // @Patch(':id')
    // update(
    //   @Param('id') id: number,
    //   @Body() updateBetsDto: UpdateBetsDto,
    // ) {
    //   this.betsService.update(+id, updateBetsDto);
    //   return 'Updated';
    // }
  
    // @Delete(':id')
    // remove(@Param('id') id: number) {
    //   this.betsService.remove(+id);
    //   return 'Deleted!';
    // }
  }
  