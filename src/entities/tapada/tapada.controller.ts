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
    forwardRef,
  } from '@nestjs/common';
  import { CreateTapadaDto } from './dto/create-tapada.dto';
  import { UpdateTapadaDto } from './dto/update-tapada.dto';
  import { TapadaService } from './tapada.service';
  import { UserService } from '../user/user.service';

@Controller('tapada')
export class TapadaController {
constructor(
  private tapadaService: TapadaService,
  @Inject(forwardRef(() => UserService))
  private readonly userService: UserService,
) {}
  
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
