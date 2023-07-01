import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportIvrService } from './report-ivr.service';
import { CreateReportIvrDto } from './dto/create-report-ivr.dto';
import { ReportIvrI } from './interfaces/report-ivr.interface';
import { RealIP } from 'nestjs-real-ip';

@Controller('report-ivr')
export class ReportIvrController {
  constructor(private readonly ReportIvrService: ReportIvrService) {}

  @Post('insert')
  create(@Body() createReportIvrDto: CreateReportIvrDto, @RealIP() ip: string) {
    return this.ReportIvrService.create(createReportIvrDto, ip);
  }

  @Get()
  findAll() {
    return this.ReportIvrService.findAll();
  }

  @Post('findAllBy')
  findAllBy(@Body() ReportIvr: ReportIvrI) {
    return this.ReportIvrService.findAllBy(ReportIvr);
  }

  @Post('findBy')
  findOne(@Body() ReportIvr: ReportIvrI) {
    return this.ReportIvrService.findOne(ReportIvr);
  }
}
