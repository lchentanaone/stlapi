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
  import { CreateExpensesDto } from './dto/create-expenses.dto';
  import { UpdateExpensesDto } from './dto/update-expenses.dto';
  import { ExpensesService } from './expenses.service';
  
  @Controller('expenses')
  export class ExpensesController {
    constructor(private expensesService: ExpensesService) {}
  
    @Get()
    async findAll() {
      return this.expensesService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.expensesService.findOne(+id);
    }
  
    @Post()
    create(@Body() createexpensesDto: CreateExpensesDto) {
      return this.expensesService.create(createexpensesDto);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: string,
      @Body() updateExpensesDto: UpdateExpensesDto,
    ) {
      this.expensesService.update(+id, updateExpensesDto);
      return 'Updated';
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      this.expensesService.remove(+id);
      return 'Deleted!';
    }
  }
  
