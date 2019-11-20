import { Injectable } from '@nestjs/common';
import { Holidays } from './interfaces/holidays.interface';
import holidayData from './data/holidays.pl';

@Injectable()
export class HolidaysService {
  private readonly holidayData: {
    [key: string]: Holidays
  };

  constructor(){
    this.holidayData = holidayData
  }

  findByYear(year: string): Holidays {
    return this.holidayData[year] || {};
  }
}
