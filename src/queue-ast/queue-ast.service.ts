import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQueueAstDto } from './dto/create-queue-ast.dto';
import { UpdateQueueAstDto } from './dto/update-queue-ast.dto';
import { QueueAst, QueueAstDocument } from './entities/queue-ast.entity';
import { QueueAstI } from './interfaces/queue-ast.interfaces';

@Injectable()
export class QueueAstService {
  constructor(
    @InjectModel(QueueAst.name) private QueueAstModel: Model<QueueAstDocument>,
  ) {}

  async create(createQueueAstDto: CreateQueueAstDto): Promise<QueueAst> {
    const getData = new this.QueueAstModel(createQueueAstDto);
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
    return this.QueueAstModel.find();
  }

  async findOne(QueueAst: QueueAstI) {
    return this.QueueAstModel.findOne(QueueAst);
  }

  update(_id: string, _updateQueueAstDto: UpdateQueueAstDto) {
    return this.QueueAstModel.findByIdAndUpdate(
      { _id },
      { $set: _updateQueueAstDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.QueueAstModel.deleteOne({ _id });
  }
}
