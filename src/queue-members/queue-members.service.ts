import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQueueMembersDto } from './dto/create-queue-members.dto';
import { UpdateQueueMembersDto } from './dto/update-queue-members.dto';
import {
  QueueMembers,
  QueueMembersDocument,
} from './entities/queue-members.entity';
import { QueueMembersI } from './interfaces/queue-members.interfaces';
import { parse, stringify, toJSON, fromJSON } from 'flatted';

@Injectable()
export class QueueMembersService {
  constructor(
    @InjectModel(QueueMembers.name)
    private QueueMembersModel: Model<QueueMembersDocument>,
  ) {}

  async create(
    createQueueMembersDto: CreateQueueMembersDto,
  ): Promise<QueueMembers> {
    const getData = new this.QueueMembersModel(createQueueMembersDto);
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
    return this.QueueMembersModel.find();
  }

  findOne(QueueMembers: QueueMembersI) {
    return this.QueueMembersModel.findOne(QueueMembers);
  }

  update(_id: string, _updateQueueMembersDto: UpdateQueueMembersDto) {
    return this.QueueMembersModel.findByIdAndUpdate(
      { _id },
      { $set: _updateQueueMembersDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.QueueMembersModel.deleteOne({ _id });
  }


  // --------------------------------------------------

  async reqRequire(req) {
    return 'paused=integer1:1&uniqueid=uinteger2:5';
  }

  async reqStore(
    createQueueMembersDto: CreateQueueMembersDto,
  ): Promise<QueueMembers> {
    const getData = new this.QueueMembersModel(createQueueMembersDto);
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

  async reqMulti(req) {
    const dados = [];
    const queue = JSON.parse('{ "queue_name": "' + req.queue_name + '" }');
    const data  = this.QueueMembersModel.findOne(queue);

    dados.push(await data);

    const convert = JSON.stringify(dados);
    
    if(convert.length > 6){
      return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '&');
    }
  }

  async reqSingle(QueueMembers: QueueMembersI) {
    const data = this.QueueMembersModel.findOne(QueueMembers);
    const dados = [];

    dados.push(await data);
    const convert = JSON.stringify(dados);

    return (
      convert
        .replace(/["|{}|\[\]]/g, '')
        .replace(/[:]/g, '=')
        .replace(/[,]/g, '&') + '\n'
    );
  }

  reqUpdate(_id: string, _updateQueueMembersDto: UpdateQueueMembersDto) {
    return this.QueueMembersModel.findByIdAndUpdate(
      { _id },
      { $set: _updateQueueMembersDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.QueueMembersModel.deleteOne({ _id });
  }

}
