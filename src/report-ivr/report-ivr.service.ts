import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportIvrDto } from './dto/create-report-ivr.dto';

import { ReportIvr, ReportIvrDocument } from './entities/report-ivr.entity';
import { ReportIvrI } from './interfaces/report-ivr.interface';

@Injectable()
export class ReportIvrService {
  constructor(
    @InjectModel(ReportIvr.name)
    private ReportIvrModel: Model<ReportIvrDocument>,
  ) {}

  async create(data: CreateReportIvrDto, ip): Promise<ReportIvr> {
    const getData = new this.ReportIvrModel(data);
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
    console.log('Insert => ReportIvr');
    return insertData.save();
  }

  findAll() {
    return this.ReportIvrModel.find();
  }

  findAllBy(ReportIvr: ReportIvrI) {
    return this.ReportIvrModel.find(ReportIvr);
  }

  findOne(ReportIvr: ReportIvrI) {
    return this.ReportIvrModel.findOne(ReportIvr);
  }
}
