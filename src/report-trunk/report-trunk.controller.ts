import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportTrunkService } from './report-trunk.service';
import { CreateReportTrunkDto } from './dto/create-report-trunk.dto';
import { ReportTrunkI } from './interfaces/report-trunk.interface';
import { RealIP } from 'nestjs-real-ip';

@Controller('report-trunk')
export class ReportTrunkController {
  constructor(
    private readonly ReportTrunkService: ReportTrunkService,
  ) {}

  @Post('insert')
  create(
    @Body() createReportTrunkDto: CreateReportTrunkDto,
    @RealIP() ip: string,
  ) {
    return this.ReportTrunkService.create(createReportTrunkDto, ip);
  }

  @Get()
  findAll() {
    return this.ReportTrunkService.findAll();
  }

  @Post('findAllBy')
  findAllBy(@Body() ReportTrunk: ReportTrunkI) {
    return this.ReportTrunkService.findAllBy(ReportTrunk);
  }

  @Post('findBy')
  findOne(@Body() ReportTrunk: ReportTrunkI) {
    return this.ReportTrunkService.findOne(ReportTrunk);
  }
}
