import { Controller, Get, Param } from '@nestjs/common';
import { Holidays } from './interfaces/holidays.interface';
import { HolidaysService } from './holidays.service';

@Controller('holidays')
export class HolidaysController {
  constructor(private readonly holidaysService: HolidaysService) {
  }

  @Get(':year')
  async findByYear(@Param('year') year: string): Promise<Holidays> {
    return this.holidaysService.findByYear(year);
  }
}
