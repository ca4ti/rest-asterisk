import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportHangupDto } from './dto/create-report-hangup.dto';

import {
  ReportHangup,
  ReportHangupDocument,
} from './entities/report-hangup.entity';
import { ReportHangupI } from './interfaces/report-hangup.interface';

@Injectable()
export class ReportHangupService {
  constructor(
    @InjectModel(ReportHangup.name)
    private ReportHangupModel: Model<ReportHangupDocument>,
  ) {}

  async create(data: CreateReportHangupDto, ip): Promise<ReportHangup> {
    const getData = new this.ReportHangupModel(data);
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
    console.log('Insert => ReportHangup');
    return insertData.save();
  }

  findAll() {
    return this.ReportHangupModel.find();
  }

  findAllBy(ReportHangup: ReportHangupI) {
    return this.ReportHangupModel.find(ReportHangup);
  }

  findOne(ReportHangup: ReportHangupI) {
    return this.ReportHangupModel.findOne(ReportHangup);
  }
}
