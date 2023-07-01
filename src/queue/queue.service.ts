import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { Queue, QueueDocument } from './entities/queue.entity';
import { QueueI } from './interfaces/queue.interfaces';

@Injectable()
export class QueueService {
  constructor(
    @InjectModel(Queue.name) private QueueModel: Model<QueueDocument>,
  ) {}

  async create(createQueueDto: CreateQueueDto): Promise<Queue> {
    const getData = new this.QueueModel(createQueueDto);
    const getFormatDate = new Date().toISOString();
    const includeData = {
      type: 'telefonia',
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
      status: 'active',
      customerId: '62e3e63f6dda97d36f667166',
    };
    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  findAll() {
    return this.QueueModel.find();
  }

  async findOne(queue: QueueI) {
    const getData = this.QueueModel.findOne(queue);
    const channel = [];

    channel.push(await getData);
    const includeData = {
      channel: channel,
    };

    return includeData;
  }

  update(_id: string, _updateQueueDto: UpdateQueueDto) {
    return this.QueueModel.findByIdAndUpdate(
      { _id },
      { $set: _updateQueueDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.QueueModel.deleteOne({ _id });
  }


  // --------------------------------------------------


  async reqStore(createQueueDto: CreateQueueDto): Promise<Queue> {
    const getData = new this.QueueModel(createQueueDto);
    const getFormatDate = new Date().toISOString();
    const includeData = {
      type: 'telefonia',
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
      status: 'active',
      customerId: '62e3e63f6dda97d36f667166',
    };
    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  async reqMulti() {
    const data = this.QueueModel.find();
    const dados = [];

    for (const elemento of await data) {
      dados.push('name=' + elemento.name);
    }

    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '\n');
  }

  async reqSingle(queue) {
    const data = this.QueueModel.findOne(queue);
    const dados = [];

    dados.push(await data);
    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '&');
  }

  reqUpdate(_id: string, _updateQueueDto: UpdateQueueDto) {
    return this.QueueModel.findByIdAndUpdate(
      { _id },
      { $set: _updateQueueDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.QueueModel.deleteOne({ _id });
  }

}
