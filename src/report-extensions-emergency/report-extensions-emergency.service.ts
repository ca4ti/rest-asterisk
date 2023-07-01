import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportExtensionsEmergencyDto } from './dto/create-report-extensions-emergency.dto';

import {
  ReportExtensionsEmergency,
  ReportExtensionsEmergencyDocument,
} from './entities/report-extensions-emergency.entity';
import { ReportExtensionsEmergencyI } from './interfaces/report-extensions-emergency.interface';

@Injectable()
export class ReportExtensionsEmergencyService {
  constructor(
    @InjectModel(ReportExtensionsEmergency.name)
    private ReportExtensionsEmergencyModel: Model<ReportExtensionsEmergencyDocument>,
  ) {}

  async create(
    createReportExtensionsEmergencyDto: CreateReportExtensionsEmergencyDto,
    ip,
  ): Promise<ReportExtensionsEmergency> {
    const getData = new this.ReportExtensionsEmergencyModel(createReportExtensionsEmergencyDto);
    const getFormatDate = new Date().toISOString();
    const IPV4 = ip.split(':');
    const includeData = {
      type: 'telefonia',
      address: IPV4[3],
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
      status: 'active',
      customerId: '62e3e63f6dda97d36f667166',
    };
    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  findAll() {
    return this.ReportExtensionsEmergencyModel.find();
  }

  findAllBy(ReportExtensionsEmergency: ReportExtensionsEmergencyI) {
    return this.ReportExtensionsEmergencyModel.find(ReportExtensionsEmergency);
  }

  findOne(ReportExtensionsEmergency: ReportExtensionsEmergencyI) {
    return this.ReportExtensionsEmergencyModel.findOne(ReportExtensionsEmergency);
  }
}
