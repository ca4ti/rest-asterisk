import { Module } from '@nestjs/common';
import { ReportTrunkService } from './report-trunk.service';
import { ReportTrunkController } from './report-trunk.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ReportTrunk,
  ReportTrunkSchema,
} from './entities/report-trunk.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReportTrunk.name, schema: ReportTrunkSchema },
    ]),
  ],
  controllers: [ReportTrunkController],
  providers: [ReportTrunkService],
})
export class ReportTrunkModule {}
