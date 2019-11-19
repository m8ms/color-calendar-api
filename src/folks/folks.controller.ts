import { Controller, Get, Post, Body, Req, Param, Put, Delete } from '@nestjs/common';
import { CreateFolkDto } from './dto/create-folk.dto';
import { FolksService } from './folks.service';
import { Folk } from './interfaces/folk.interface';

@Controller('folks')
export class FolksController {
  constructor(private readonly folksService: FolksService) {
  }

  @Post()
  async create(@Body() createFolkDto: CreateFolkDto) {
    return this.folksService.create(createFolkDto);
  }

  @Get()
  async findAll(): Promise<Folk[]> {
    return this.folksService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Folk> {
    return this.folksService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFolkDto: CreateFolkDto) {
    return this.folksService.update(id, updateFolkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.folksService.delete(id);
  }
}
