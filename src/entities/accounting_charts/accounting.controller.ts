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
  import { CreateAccountingDto } from './dto/create-accounting.dto';
  import { UpdateAccountingDto } from './dto/update-accounting.dto';
  import { AccountingService } from './accounting.service';
  
  @Controller('accounting')
  export class AccountingController {
    constructor(private accountingService: AccountingService) {}
  
    // @Get()
    // async fillAll() {
    //   return this.betsService.findAll();
    // }
  
    // @Get(':id')
    // async findbyOne(@Param('id') id: number) {
    //   return this.betsService.findbyOne(+id);
    // }
  
    @Post()
    create(@Body() createAccountingDto: CreateAccountingDto) {
      return this.accountingService.create(createAccountingDto);
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
  