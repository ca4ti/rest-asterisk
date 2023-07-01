import { Module } from '@nestjs/common';
import { HangupService } from './hangup.service';
import { HangupController } from './hangup.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hangup, HangupSchema } from './entities/hangup.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hangup.name, schema: HangupSchema }]),
  ],
  controllers: [HangupController],
  providers: [HangupService],
})
export class HangupModule {}
