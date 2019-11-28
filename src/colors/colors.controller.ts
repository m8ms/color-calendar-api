import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { Color } from './interfaces/color.interface';
import { ColorDto } from './dto/color.dto';

@Controller('colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) {
  }

  @Post()
  async create(@Body() createColorDto: ColorDto) {
    return this.colorsService.create(createColorDto);
  }

  @Get()
  async findAll(): Promise<Color[]> {
    return this.colorsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Color> {
    return this.colorsService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFolkDto: ColorDto) {
    return this.colorsService.update(id, updateFolkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colorsService.delete(id);
  }
}
