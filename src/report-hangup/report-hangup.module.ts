import { Module } from '@nestjs/common';
import { ReportHangupService } from './report-hangup.service';
import { ReportHangupController } from './report-hangup.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ReportHangup,
  ReportHangupSchema,
} from './entities/report-hangup.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReportHangup.name, schema: ReportHangupSchema },
    ]),
  ],
  controllers: [ReportHangupController],
  providers: [ReportHangupService],
})
export class ReportHangupModule {}
