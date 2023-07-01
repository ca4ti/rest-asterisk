import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportExtensionsDto } from './dto/create-report-extensions.dto';

import {
  ReportExtensions,
  ReportExtensionsDocument,
} from './entities/report-extensions.entity';
import { ReportExtensionsI } from './interfaces/report-extensions.interface';

@Injectable()
export class ReportExtensionsService {
  constructor(
    @InjectModel(ReportExtensions.name)
    private ReportExtensionsModel: Model<ReportExtensionsDocument>,
  ) {}

  async create(
    createReportExtensionsDto: CreateReportExtensionsDto,
    ip,
  ): Promise<ReportExtensions> {
    const getData = new this.ReportExtensionsModel(createReportExtensionsDto);
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
    return this.ReportExtensionsModel.find();
  }

  findAllBy(ReportExtensions: ReportExtensionsI) {
    return this.ReportExtensionsModel.find(ReportExtensions);
  }

  findOne(ReportExtensions: ReportExtensionsI) {
    return this.ReportExtensionsModel.findOne(ReportExtensions);
  }
}
