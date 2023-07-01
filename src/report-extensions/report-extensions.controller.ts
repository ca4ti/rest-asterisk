import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportExtensionsService } from './report-extensions.service';
import { CreateReportExtensionsDto } from './dto/create-report-extensions.dto';
import { ReportExtensionsI } from './interfaces/report-extensions.interface';
import { RealIP } from 'nestjs-real-ip';

@Controller('report-extensions')
export class ReportExtensionsController {
  constructor(
    private readonly ReportExtensionsService: ReportExtensionsService,
  ) {}

  @Post('insert')
  create(
    @Body() createReportExtensionsDto: CreateReportExtensionsDto,
    @RealIP() ip: string,
  ) {
    return this.ReportExtensionsService.create(createReportExtensionsDto, ip);
  }

  @Get()
  findAll() {
    return this.ReportExtensionsService.findAll();
  }

  @Post('findAllBy')
  findAllBy(@Body() ReportExtensions: ReportExtensionsI) {
    return this.ReportExtensionsService.findAllBy(ReportExtensions);
  }

  @Post('findBy')
  findOne(@Body() ReportExtensions: ReportExtensionsI) {
    return this.ReportExtensionsService.findOne(ReportExtensions);
  }
}
