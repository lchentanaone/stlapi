import {
    Controller,
    Post,
    Get,
    Param,
    Body,
    Delete,
    Patch,
    Inject,
    forwardRef,
    Request,
    UseGuards,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDto } from './dto/create-user.dto';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { BranchService } from '../branch/branch.service';
  import { AttendantService } from '../attendant/attendant.service';
  import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';

  
  @Controller('user')
  export class UserController {
    constructor(
      private userService: UserService,
      @Inject(forwardRef(() => BranchService))
      private readonly branchService: BranchService,
      @Inject(forwardRef(() => AttendantService))
      private readonly attendantService: AttendantService,

    ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async fillAll() {
      return this.userService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString('utf-8'),
    );
    const user_Id = decodedToken.userPayload.id;

    return this.userService.findOne(+user_Id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}








