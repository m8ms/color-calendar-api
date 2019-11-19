import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FolkSchema } from './schemas/folk.schema';
import { FolksController } from './folks.controller';
import { FolksService } from './folks.service';
import { ColorsModule } from '../colors/colors.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Folk', schema: FolkSchema }]),
    ColorsModule
  ],
  controllers: [FolksController],
  providers: [FolksService],
})
export class FolksModule {}
