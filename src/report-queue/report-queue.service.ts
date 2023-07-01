import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportQueueDto } from './dto/create-report-queue.dto';

import {
  ReportQueue,
  ReportQueueDocument,
} from './entities/report-queue.entity';
import { ReportQueueI } from './interfaces/report-queue.interface';

@Injectable()
export class ReportQueueService {
  constructor(
    @InjectModel(ReportQueue.name)
    private ReportQueueModel: Model<ReportQueueDocument>,
  ) {}

  async create(
    createReportQueueDto: CreateReportQueueDto,
    ip,
  ): Promise<ReportQueue> {
    const getData = new this.ReportQueueModel(createReportQueueDto);
    console.log(getData);
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
    console.log('Insert => ReportQueue');
    return insertData.save();
  }

  findAll() {
    return this.ReportQueueModel.find();
  }

  findAllBy(ReportQueue: ReportQueueI) {
    return this.ReportQueueModel.find(ReportQueue);
  }

  findOne(ReportQueue: ReportQueueI) {
    return this.ReportQueueModel.findOne(ReportQueue);
  }
}
