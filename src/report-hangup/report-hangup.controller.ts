import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportHangupService } from './report-hangup.service';
import { CreateReportHangupDto } from './dto/create-report-hangup.dto';
import { ReportHangupI } from './interfaces/report-hangup.interface';
import { RealIP } from 'nestjs-real-ip';

@Controller('report-hangup')
export class ReportHangupController {
  constructor(private readonly ReportHangupService: ReportHangupService) {}

  @Post('insert')
  create(
    @Body() createReportHangupDto: CreateReportHangupDto,
    @RealIP() ip: string,
  ) {
    return this.ReportHangupService.create(createReportHangupDto, ip);
  }

  @Get()
  findAll() {
    return this.ReportHangupService.findAll();
  }

  @Post('findAllBy')
  findAllBy(@Body() ReportHangup: ReportHangupI) {
    return this.ReportHangupService.findAllBy(ReportHangup);
  }

  @Post('findBy')
  findOne(@Body() ReportHangup: ReportHangupI) {
    return this.ReportHangupService.findOne(ReportHangup);
  }
}
