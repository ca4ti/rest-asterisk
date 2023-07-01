import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportAnnouncementDto } from './dto/create-report-announcement.dto';

import {
  ReportAnnouncement,
  ReportAnnouncementDocument,
} from './entities/report-queue.entity';
import { ReportAnnouncementI } from './interfaces/report-announcement.interface';

@Injectable()
export class ReportAnnouncementService {
  constructor(
    @InjectModel(ReportAnnouncement.name)
    private ReportAnnouncementModel: Model<ReportAnnouncementDocument>,
  ) {}

  async create(
    data: CreateReportAnnouncementDto,
    ip,
  ): Promise<ReportAnnouncement> {
    const getData = new this.ReportAnnouncementModel(data);
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
    console.log('Insert => ReportAnnouncement');
    return insertData.save();
  }

  findAll() {
    return this.ReportAnnouncementModel.find();
  }

  findAllBy(ReportAnnouncement: ReportAnnouncementI) {
    return this.ReportAnnouncementModel.find(ReportAnnouncement);
  }

  findOne(ReportAnnouncement: ReportAnnouncementI) {
    return this.ReportAnnouncementModel.findOne(ReportAnnouncement);
  }
}
