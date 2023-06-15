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
  import { CreateLottoDto } from './dto/create-lotto.dto';
  import { UpdateLottoDto } from './dto/update-lotto.dto';
  import { LottoService } from './lotto.service';
  
  @Controller('lotto')
  export class LottoController {
    constructor(private lottoService: LottoService) {}
  
    // @Get()
    // async findAll() {
    //   // return this.lottoService.findAll();
    // }
  
    // @Get(':id')
    // async findbyOne(@Param('id') id: number) {
    //   return this.lottoService.findbyOne(+id);
    // }
  
    @Post()
    create(@Body() createLottoDto: CreateLottoDto) {
      return this.lottoService.create(createLottoDto);
    }
  
    // @Patch(':id')
    // update(
    //   @Param('id') id: number,
    //   @Body() updateLottoDto: UpdateLottoDto,
    // ) {
    //   this.lottoService.update(+id, updateLottoDto);
    //   return 'Updated';
    // }
  
    // @Delete(':id')
    // remove(@Param('id') id: number ) {
    //   this.lottoService.remove(+id);
    //   return 'Deleted!';
    // }
  }
  