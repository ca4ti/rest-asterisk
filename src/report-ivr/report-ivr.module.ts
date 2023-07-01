import { Module } from '@nestjs/common';
import { ReportIvrService } from './report-ivr.service';
import { ReportIvrController } from './report-ivr.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportIvr, ReportIvrSchema } from './entities/report-ivr.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReportIvr.name, schema: ReportIvrSchema },
    ]),
  ],
  controllers: [ReportIvrController],
  providers: [ReportIvrService],
})
export class ReportIvrModule {}
