import { Module } from '@nestjs/common';
import { ReportCallcenterService } from './report-callcenter.service';
import { ReportCallcenterController } from './report-callcenter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ReportCallcenter,
  ReportCallcenterSchema,
} from './entities/report-callcenter.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReportCallcenter.name, schema: ReportCallcenterSchema },
    ]),
  ],
  controllers: [ReportCallcenterController],
  providers: [ReportCallcenterService],
})
export class ReportCallcenterModule {}
