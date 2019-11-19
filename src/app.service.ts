import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { format } from "date-fns";
import { JSDOM } from 'jsdom';
import { ConfigService } from './config/config.service';

const _organizeHolidays = (item, i) => i % 2
  ? item.textContent
  : item.querySelector('[data-date]').dataset['date'];

@Injectable()
export class AppService {
  private readonly holidaysSource: string;

  constructor(config: ConfigService) {
    this.holidaysSource = config.get('HOLIDAYS_SOURCE')
  }

  getHello(): string {
    return 'Hello World!';
  }

  async getHolidaysByYear (year): Promise<object> {
    const holidays = await axios(this.holidaysSource + year);
    const dom = new JSDOM(holidays.data);
    const nodes = dom.window.document.querySelectorAll('.cbox .tab_easy td');
    const data = [].map.call(nodes, _organizeHolidays);

    return data.reduce((acc, currentItem, currentIndex, source) => {
      if (currentIndex % 2) {
        const date = format(new Date(source[currentIndex - 1]), 'MM-dd');
        acc[date] = currentItem;
      }

      return acc;
    }, {});
  };

}
