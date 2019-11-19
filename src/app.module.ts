import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FolksModule } from './folks/folks.module';
import { ColorsModule } from './colors/colors.module';
import { ConfigModule } from './config/config.module';

const mongoSetup = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', mongoSetup),
    FolksModule,
    ColorsModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
