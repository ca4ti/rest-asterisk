import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportExtensionsEmergencyService } from './report-extensions-emergency.service';
import { CreateReportExtensionsEmergencyDto } from './dto/create-report-extensions-emergency.dto';
import { ReportExtensionsEmergencyI } from './interfaces/report-extensions-emergency.interface';
import { RealIP } from 'nestjs-real-ip';

@Controller('report-extensions-emergency')
export class ReportExtensionsEmergencyController {
  constructor(
    private readonly ReportExtensionsEmergencyService: ReportExtensionsEmergencyService,
  ) {}

  @Post('insert')
  create(
    @Body() createReportExtensionsEmergencyDto: CreateReportExtensionsEmergencyDto,
    @RealIP() ip: string,
  ) {
    return this.ReportExtensionsEmergencyService.create(createReportExtensionsEmergencyDto, ip);
  }

  @Get()
  findAll() {
    return this.ReportExtensionsEmergencyService.findAll();
  }

  @Post('findAllBy')
  findAllBy(@Body() ReportExtensionsEmergency: ReportExtensionsEmergencyI) {
    return this.ReportExtensionsEmergencyService.findAllBy(ReportExtensionsEmergency);
  }

  @Post('findBy')
  findOne(@Body() ReportExtensionsEmergency: ReportExtensionsEmergencyI) {
    return this.ReportExtensionsEmergencyService.findOne(ReportExtensionsEmergency);
  }
}
