import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportQueueService } from './report-queue.service';
import { CreateReportQueueDto } from './dto/create-report-queue.dto';
import { ReportQueueI } from './interfaces/report-queue.interface';
import { RealIP } from 'nestjs-real-ip';

@Controller('report-queue')
export class ReportQueueController {
  constructor(private readonly reportQueueService: ReportQueueService) {}

  @Post('insert')
  create(
    @Body() createReportQueueDto: CreateReportQueueDto,
    @RealIP() ip: string,
  ) {
    return this.reportQueueService.create(createReportQueueDto, ip);
  }

  @Get()
  findAll() {
    return this.reportQueueService.findAll();
  }

  @Post('findAllBy')
  findAllBy(@Body() reportQueue: ReportQueueI) {
    return this.reportQueueService.findAllBy(reportQueue);
  }

  @Post('findBy')
  findOne(@Body() reportQueue: ReportQueueI) {
    return this.reportQueueService.findOne(reportQueue);
  }
}
