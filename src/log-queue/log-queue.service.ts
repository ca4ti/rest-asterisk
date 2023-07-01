import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLogQueueDto } from './dto/create-log-queue.dto';
import { UpdateLogQueueDto } from './dto/update-log-queue.dto';
import { LogQueue, LogQueueDocument } from './entities/log-queue.entity';

@Injectable()
export class LogQueueService {
  constructor(
    @InjectModel(LogQueue.name)
    private LogQueueModel: Model<LogQueueDocument>,
  ) {}

  async create(req, ip): Promise<LogQueue> {
    const getData = {
      data: req,
    };
    const Data = new this.LogQueueModel(getData);
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
    const insertData = Object.assign(Data, includeData);
    return insertData.save();
  }

  findAll() {
    return `This action returns all logQueue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logQueue`;
  }

  update(id: number, updateLogQueueDto: UpdateLogQueueDto) {
    return `This action updates a #${id} logQueue`;
  }

  remove(id: number) {
    return `This action removes a #${id} logQueue`;
  }
}
