import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportDidService } from './report-did.service';
import { CreateReportDidDto } from './dto/create-report-did.dto';
import { ReportDidI } from './interfaces/report-did.interface';
import { RealIP } from 'nestjs-real-ip';

@Controller('report-did')
export class ReportDidController {
  constructor(private readonly ReportDidService: ReportDidService) {}

  @Post('insert')
  create(@Body() createReportDidDto: CreateReportDidDto, @RealIP() ip: string) {
    return this.ReportDidService.create(createReportDidDto, ip);
  }

  @Get()
  findAll() {
    return this.ReportDidService.findAll();
  }

  @Post('findAllBy')
  findAllBy(@Body() ReportDid: ReportDidI) {
    return this.ReportDidService.findAllBy(ReportDid);
  }

  @Post('findBy')
  findOne(@Body() ReportDid: ReportDidI) {
    return this.ReportDidService.findOne(ReportDid);
  }
}
