import { Module } from '@nestjs/common';
import { ReportAnnouncementService } from './report-announcement.service';
import { ReportAnnouncementController } from './report-announcement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ReportAnnouncement,
  ReportAnnouncementSchema,
} from './entities/report-queue.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReportAnnouncement.name, schema: ReportAnnouncementSchema },
    ]),
  ],
  controllers: [ReportAnnouncementController],
  providers: [ReportAnnouncementService],
})
export class ReportAnnouncementModule {}
