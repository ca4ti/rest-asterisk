import { Module } from '@nestjs/common';
import { CallcenterService } from './callcenter.service';
import { CallcenterController } from './callcenter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Callcenter, CallcenterSchema } from './entities/callcenter.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Callcenter.name, schema: CallcenterSchema },
    ]),
  ],
  controllers: [CallcenterController],
  providers: [CallcenterService],
})
export class CallcenterModule {}
