import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportTrunkDto } from './dto/create-report-trunk.dto';

import {
  ReportTrunk,
  ReportTrunkDocument,
} from './entities/report-trunk.entity';
import { ReportTrunkI } from './interfaces/report-trunk.interface';

@Injectable()
export class ReportTrunkService {
  constructor(
    @InjectModel(ReportTrunk.name)
    private ReportTrunkModel: Model<ReportTrunkDocument>,
  ) {}

  async create(
    createReportTrunkDto: CreateReportTrunkDto,
    ip,
  ): Promise<ReportTrunk> {
    const getData = new this.ReportTrunkModel(createReportTrunkDto);
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
    return this.ReportTrunkModel.find();
  }

  findAllBy(ReportTrunk: ReportTrunkI) {
    return this.ReportTrunkModel.find(ReportTrunk);
  }

  findOne(ReportTrunk: ReportTrunkI) {
    return this.ReportTrunkModel.findOne(ReportTrunk);
  }
}
