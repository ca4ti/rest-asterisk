import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportTimeGroupService } from './report-time-group.service';
import { CreateReportTimeGroupDto } from './dto/create-report-time-group.dto';
import { ReportTimeGroupI } from './interfaces/report-time-group.interface';
import { RealIP } from 'nestjs-real-ip';

@Controller('report-time-group')
export class ReportTimeGroupController {
  constructor(
    private readonly ReportTimeGroupService: ReportTimeGroupService,
  ) {}

  @Post('insert')
  create(
    @Body() createReportTimeGroupDto: CreateReportTimeGroupDto,
    @RealIP() ip: string,
  ) {
    return this.ReportTimeGroupService.create(createReportTimeGroupDto, ip);
  }

  @Get()
  findAll() {
    return this.ReportTimeGroupService.findAll();
  }

  @Post('findAllBy')
  findAllBy(@Body() ReportTimeGroup: ReportTimeGroupI) {
    return this.ReportTimeGroupService.findAllBy(ReportTimeGroup);
  }

  @Post('findBy')
  findOne(@Body() ReportTimeGroup: ReportTimeGroupI) {
    return this.ReportTimeGroupService.findOne(ReportTimeGroup);
  }
}
