import {
    Controller,
    Post,
    Get,
    Param,
    Body,
    Delete,
    Patch,
    Res,
    forwardRef,
    Inject,
  } from '@nestjs/common';
  import { CreateAccountingDto } from './dto/create-accounting.dto';
  import { UpdateAccountingDto } from './dto/update-accounting.dto';
  import { AccountingService } from './accounting.service';
  import { JournalService } from '../journal/journal.service';
  
  @Controller('accounting')
  export class AccountingController {
    constructor(
      private accountingService: AccountingService,
      @Inject(forwardRef(() => JournalService))
      private readonly branchService: JournalService,
    ) {}
  
    @Get()
    async findAll() {
      return this.accountingService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.accountingService.findOne(+id);
    }
  
    @Post()
    create(@Body() createAccountingDto: CreateAccountingDto) {
      return this.accountingService.create(createAccountingDto);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: string,
      @Body() updateAccountingDto: UpdateAccountingDto,
    ) {
      this.accountingService.update(+id, updateAccountingDto);
      return 'Updated';
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      this.accountingService.remove(+id);
      return 'Deleted!';
    }
  }
  