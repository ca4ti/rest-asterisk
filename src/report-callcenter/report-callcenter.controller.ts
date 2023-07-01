import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportCallcenterService } from './report-callcenter.service';
import { CreateReportCallcenterDto } from './dto/create-report-callcenter.dto';
import { ReportCallcenterI } from './interfaces/report-callcenter.interface';
import { RealIP } from 'nestjs-real-ip';

@Controller('report-callcenter')
export class ReportCallcenterController {
  constructor(
    private readonly ReportCallcenterService: ReportCallcenterService,
  ) {}

  @Post('insert')
  create(
    @Body() createReportCallcenterDto: CreateReportCallcenterDto,
    @RealIP() ip: string,
  ) {
    return this.ReportCallcenterService.create(createReportCallcenterDto, ip);
  }

  @Get()
  findAll() {
    return this.ReportCallcenterService.findAll();
  }

  @Post('findAllBy')
  findAllBy(@Body() ReportCallcenter: ReportCallcenterI) {
    return this.ReportCallcenterService.findAllBy(ReportCallcenter);
  }

  @Post('findBy')
  findOne(@Body() ReportCallcenter: ReportCallcenterI) {
    return this.ReportCallcenterService.findOne(ReportCallcenter);
  }
}
