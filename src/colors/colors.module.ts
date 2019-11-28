import { Module } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ColorSchema } from './schemas/color.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Color', schema: ColorSchema }])
  ],
  providers: [ColorsService],
  controllers: [ColorsController]
})
export class ColorsModule {}
