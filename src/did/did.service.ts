import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDidDto } from './dto/create-did.dto';
import { UpdateDidDto } from './dto/update-did.dto';
import { Did, DidDocument } from './entities/did.entity';
import { DidI } from './interfaces/did.intefaces';

@Injectable()
export class DidService {
  constructor(
    @InjectModel(Did.name)
    private DidModel: Model<DidDocument>,
  ) {}

  async create(createDidDto: CreateDidDto): Promise<Did> {
    const getData = new this.DidModel(createDidDto);
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
    return this.DidModel.find().exec();
  }

  findOne(Did: DidI) {
    return this.DidModel.findOne(Did).exec();
  }

  update(_id: string, updateDidDto: UpdateDidDto) {
    return this.DidModel.findByIdAndUpdate(
      { _id },
      { $set: updateDidDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.DidModel.deleteOne({ _id });
  }
}
