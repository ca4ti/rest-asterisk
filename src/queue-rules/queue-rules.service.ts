import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQueueRulesDto } from './dto/create-queue-rules.dto';
import { UpdateQueueRulesDto } from './dto/update-queue-rules.dto';
import { QueueRules, QueueRulesDocument } from './entities/queue-rules.entity';
import { QueueRulesI } from './interfaces/queue-rules.interfaces';
import { parse, stringify, toJSON, fromJSON } from 'flatted';

@Injectable()
export class QueueRulesService {
  constructor(
    @InjectModel(QueueRules.name)
    private QueueRulesModel: Model<QueueRulesDocument>,
  ) {}

  async create(createQueueRulesDto: CreateQueueRulesDto): Promise<QueueRules> {
    const getData = new this.QueueRulesModel(createQueueRulesDto);
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
    return this.QueueRulesModel.find();
  }

  findOne(QueueRules: QueueRulesI) {
    return this.QueueRulesModel.findOne(QueueRules);
  }

  update(_id: string, _updateQueueRulesDto: UpdateQueueRulesDto) {
    return this.QueueRulesModel.findByIdAndUpdate(
      { _id },
      { $set: _updateQueueRulesDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.QueueRulesModel.deleteOne({ _id });
  }




  async reqStore(createQueueRulesDto: CreateQueueRulesDto): Promise<QueueRules> {
    const getData = new this.QueueRulesModel(createQueueRulesDto);
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
    return this.QueueRulesModel.find();
  }

  async reqSingle(QueueRules: QueueRulesI) {
    return this.QueueRulesModel.findOne(QueueRules);
  }

  reqUpdate(_id: string, _updateQueueRulesDto: UpdateQueueRulesDto) {
    return this.QueueRulesModel.findByIdAndUpdate(
      { _id },
      { $set: _updateQueueRulesDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.QueueRulesModel.deleteOne({ _id });
  }

}
