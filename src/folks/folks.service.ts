import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Folk } from './interfaces/folk.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFolkDto } from './dto/create-folk.dto';

@Injectable()
export class FolksService {

  constructor(@InjectModel('Folk') private readonly folkModel: Model<Folk>) {
  }

  async create(createFolkDto: CreateFolkDto): Promise<Folk> {
    const createdFolk = new this.folkModel(createFolkDto);
    return createdFolk.save();
  }

  async findAll(): Promise<Folk[]> {
    return await this.folkModel.find(null, '_id name').exec();
  }

  async findById(id: string): Promise<Folk> {
    return await this.folkModel.findById(id).exec();
  }

  async update(id: string, dto: CreateFolkDto): Promise<Folk> {
    return await this.folkModel.updateOne({ _id: id }, dto).exec();
  }

  async delete(id: string): Promise<Folk> {
    return await this.folkModel.findByIdAndDelete(id).exec();
  }
}
