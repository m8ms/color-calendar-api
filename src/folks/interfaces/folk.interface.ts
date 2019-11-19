import { Color } from '../../colors/interfaces/color.interface';

export interface Folk {
  name: string;
  colors: {
    [key: string]: Color
  }
}
