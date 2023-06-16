// /* eslint-disable prettier/prettier */
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
import { CreateAttendantDto } from './dto/create-attendant.dto';
import { UpdateAttendantDto } from './dto/update-attendant.dto';
import { AttendantService } from './attendant.service';

@Controller('attendant')
export class AttendantController {
  constructor(private attendantService: AttendantService) {}

  @Get()
  async fillAll() {
    return this.attendantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.attendantService.findOne(+id);
  }

  @Post()
  create(@Body() createAttendantDto: CreateAttendantDto) {
    return this.attendantService.create(createAttendantDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAttendantDto: UpdateAttendantDto,
  ) {
    this.attendantService.update(+id, updateAttendantDto);
    return 'Updated';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.attendantService.remove(+id);
    return 'Deleted!';
  }
}
