import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportCallcenterDto } from './dto/create-report-callcenter.dto';

import {
  ReportCallcenter,
  ReportCallcenterDocument,
} from './entities/report-callcenter.entity';
import { ReportCallcenterI } from './interfaces/report-callcenter.interface';

@Injectable()
export class ReportCallcenterService {
  constructor(
    @InjectModel(ReportCallcenter.name)
    private ReportCallcenterModel: Model<ReportCallcenterDocument>,
  ) {}

  async create(data: CreateReportCallcenterDto, ip): Promise<ReportCallcenter> {
    const getData = new this.ReportCallcenterModel(data);
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
    console.log('Insert => ReportCallcenter');
    return insertData.save();
  }

  findAll() {
    return this.ReportCallcenterModel.find();
  }

  findAllBy(ReportCallcenter: ReportCallcenterI) {
    return this.ReportCallcenterModel.find(ReportCallcenter);
  }

  findOne(ReportCallcenter: ReportCallcenterI) {
    return this.ReportCallcenterModel.findOne(ReportCallcenter);
  }
}
