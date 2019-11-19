import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get-all-holidays')
  async getHolidays(): Promise<object> {
    const holidaysByYear = {};
    for (let i = 2019; i < 2022; i++) {
      holidaysByYear[i.toString()] = await this.appService.getHolidaysByYear(i);
    }
    return holidaysByYear;
  }
}
