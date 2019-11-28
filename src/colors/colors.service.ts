import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Color } from './interfaces/color.interface';
import { ColorDto } from './dto/color.dto';

@Injectable()
export class ColorsService {
  constructor(@InjectModel('Color') private readonly colorModel: Model<Color>) {
  }

  async create(createColorDto: ColorDto): Promise<Color> {
    const createdColor = new this.colorModel(createColorDto);
    return createdColor.save();
  }

  async findAll(): Promise<Color[]> {
    return await this.colorModel.find().exec();
  }

  async findById(id: string): Promise<Color> {
    return await this.colorModel.findById(id).exec();
  }

  async update(id: string, dto: ColorDto): Promise<Color> {
    return await this.colorModel.updateOne({ _id: id }, dto).exec();
  }

  async delete(id: string): Promise<Color> {
    return await this.colorModel.findByIdAndDelete(id).exec();
  }
}
