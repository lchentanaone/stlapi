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
  import { CreateUserDto } from './dto/create-user.dto';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { UserService } from './user.service';
  
  @Controller('user')
  export class UserController {
    constructor(private userService: UserService) {}
  
    @Get()
    async findAll() {
      return this.userService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.userService.findOne(+id);
    }
  
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: string,
      @Body() updateUserDto: UpdateUserDto,
    ) {
      this.userService.update(+id, updateUserDto);
      return 'Updated';
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      this.userService.remove(+id);
      return 'Deleted!';
    }
  }
  