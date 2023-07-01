import { Module } from '@nestjs/common';
import { ReportTimeGroupService } from './report-time-group.service';
import { ReportTimeGroupController } from './report-time-group.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ReportTimeGroup,
  ReportTimeGroupSchema,
} from './entities/report-time-group.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReportTimeGroup.name, schema: ReportTimeGroupSchema },
    ]),
  ],
  controllers: [ReportTimeGroupController],
  providers: [ReportTimeGroupService],
})
export class ReportTimeGroupModule {}
