import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportDidDto } from './dto/create-report-did.dto';

import { ReportDid, ReportDidDocument } from './entities/report-did.entity';
import { ReportDidI } from './interfaces/report-did.interface';

@Injectable()
export class ReportDidService {
  constructor(
    @InjectModel(ReportDid.name)
    private ReportDidModel: Model<ReportDidDocument>,
  ) {}

  async create(data: CreateReportDidDto, ip): Promise<ReportDid> {
    const getData = new this.ReportDidModel(data);
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
    console.log('Insert => ReportDid');
    return insertData.save();
  }

  findAll() {
    return this.ReportDidModel.find();
  }

  findAllBy(ReportDid: ReportDidI) {
    return this.ReportDidModel.find(ReportDid);
  }

  findOne(ReportDid: ReportDidI) {
    return this.ReportDidModel.findOne(ReportDid);
  }
}
