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
  import { CreateTapadaDto } from './dto/create-tapada.dto';
  import { UpdateTapadaDto } from './dto/update-tapada.dto';
  import { TapadaService } from './tapada.service';

@Controller('tapada')
export class TapadaController {
constructor(private tapadaService: TapadaService) {}
  
    @Get()
    async findAll() {
    return this.tapadaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
    return this.tapadaService.findOne(+id);
    }

    @Post()
    create(@Body() createTapadaDto: CreateTapadaDto) {
    return this.tapadaService.create(createTapadaDto);
    }

    @Patch(':id')
    update(
    @Param('id') id: string,
    @Body() updateTapadaDto: UpdateTapadaDto,
    ) {
    this.tapadaService.update(+id, updateTapadaDto);
    return 'Updated';
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    this.tapadaService.remove(+id);
    return 'Deleted!';
    }
}
