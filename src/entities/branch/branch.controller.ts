import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Delete,
  Patch,
  forwardRef,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { BranchService } from './branch.service';
import { UpdateBranchDto } from '../branch/dto/update-branch.dto';
import { AttendantService } from '../attendant/attendant.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';

@Controller('branch')
export class BranchController {
  constructor(
    private branchService: BranchService,
    @Inject(forwardRef(() => AttendantService))
    private readonly attendantService: AttendantService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async fillAll() {
    return this.branchService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.branchService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBranchDto: CreateBranchDto) {
    return this.branchService.create(createBranchDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBranchDto: UpdateBranchDto) {
    this.branchService.update(+id, updateBranchDto);
    return 'Updated';
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.branchService.remove(+id);
    return 'Deleted!';
  }
}
