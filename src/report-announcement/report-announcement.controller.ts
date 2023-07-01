import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportAnnouncementService } from './report-announcement.service';
import { CreateReportAnnouncementDto } from './dto/create-report-announcement.dto';
import { ReportAnnouncementI } from './interfaces/report-announcement.interface';
import { RealIP } from 'nestjs-real-ip';

@Controller('report-announcement')
export class ReportAnnouncementController {
  constructor(
    private readonly ReportAnnouncementService: ReportAnnouncementService,
  ) {}

  @Post('insert')
  create(
    @Body() createReportAnnouncementDto: CreateReportAnnouncementDto,
    @RealIP() ip: string,
  ) {
    return this.ReportAnnouncementService.create(
      createReportAnnouncementDto,
      ip,
    );
  }

  @Get()
  findAll() {
    return this.ReportAnnouncementService.findAll();
  }

  @Post('findAllBy')
  findAllBy(@Body() ReportAnnouncement: ReportAnnouncementI) {
    return this.ReportAnnouncementService.findAllBy(ReportAnnouncement);
  }

  @Post('findBy')
  findOne(@Body() ReportAnnouncement: ReportAnnouncementI) {
    return this.ReportAnnouncementService.findOne(ReportAnnouncement);
  }
}
