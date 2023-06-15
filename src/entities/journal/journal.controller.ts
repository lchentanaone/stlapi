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
  import { CreateJournalDto } from './dto/create-journal.dto';
  import { UpdateJournalDto } from './dto/update-journal.dto';
  import { JournalService } from './journal.service';
  
  @Controller('journal')
  export class JournalController {
    constructor(private journalService: JournalService) {}
  
    @Get()
    async findAll() {
      return this.journalService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.journalService.findOne(+id);
    }
  
    @Post()
    create(@Body() createjournalDto: CreateJournalDto) {
      return this.journalService.create(createjournalDto);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: string,
      @Body() updateJournalDto: UpdateJournalDto,
    ) {
      this.journalService.update(+id, updateJournalDto);
      return 'Updated';
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      this.journalService.remove(+id);
      return 'Deleted!';
    }
  }
  
