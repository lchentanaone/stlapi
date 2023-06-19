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
    forwardRef
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDto } from './dto/create-user.dto';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { BranchService } from '../branch/branch.service';
  import { AttendantService } from '../attendant/attendant.service';
  
  @Controller('user')
  export class UserController {
    constructor(
      private userService: UserService,
      @Inject(forwardRef(() => BranchService))
      private readonly branchService: BranchService,
      @Inject(forwardRef(() => AttendantService))
      private readonly attendantService: AttendantService,

    ) {}
  
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
  