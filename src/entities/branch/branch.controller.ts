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
import { BranchService } from './branch.service';
import { UpdateBranchDto } from '../branch/dto/update-branch.dto';
import { AttendantService } from '../attendant/attendant.service';
import { CreateBranchDto } from './dto/create-branch.dto';

@Controller('branch')
export class BranchController {
  constructor(
    private branchService: BranchService,
    @Inject(forwardRef(() => AttendantService))
    private readonly attendantService: AttendantService,
  ) {}

  @Get()
  async fillAll() {
    return this.branchService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.branchService.findOne(+id);
  }

  @Post()
  create(@Body() createBranchDto: CreateBranchDto) {
    return this.branchService.create(createBranchDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBranchDto: UpdateBranchDto) {
    this.branchService.update(+id, updateBranchDto);
    return 'Updated';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.branchService.remove(+id);
    return 'Deleted!';
  }
}
