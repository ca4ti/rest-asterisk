import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportTimeGroupDto } from './dto/create-report-time-group.dto';

import {
  ReportTimeGroup,
  ReportTimeGroupDocument,
} from './entities/report-time-group.entity';
import { ReportTimeGroupI } from './interfaces/report-time-group.interface';

@Injectable()
export class ReportTimeGroupService {
  constructor(
    @InjectModel(ReportTimeGroup.name)
    private ReportTimeGroupModel: Model<ReportTimeGroupDocument>,
  ) {}

  async create(data: CreateReportTimeGroupDto, ip): Promise<ReportTimeGroup> {
    const getData = new this.ReportTimeGroupModel(data);
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
    console.log('Insert => ReportTimeGroup');
    return insertData.save();
  }

  findAll() {
    return this.ReportTimeGroupModel.find();
  }

  findAllBy(ReportTimeGroup: ReportTimeGroupI) {
    return this.ReportTimeGroupModel.find(ReportTimeGroup);
  }

  findOne(ReportTimeGroup: ReportTimeGroupI) {
    return this.ReportTimeGroupModel.findOne(ReportTimeGroup);
  }
}
