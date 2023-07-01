import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCallcenterDto } from './dto/create-callcenter.dto';
import { UpdateCallcenterDto } from './dto/update-callcenter.dto';
import { Callcenter, CallcenterDocument } from './entities/callcenter.entity';
import { CallcenterI } from './interfaces/callcenter.interfaces';

@Injectable()
export class CallcenterService {
  constructor(
    @InjectModel(Callcenter.name)
    private CallcenterModel: Model<CallcenterDocument>,
  ) {}

  async create(createCallcenterDto: CreateCallcenterDto): Promise<Callcenter> {
    const getData = new this.CallcenterModel(createCallcenterDto);
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
    return this.CallcenterModel.find().exec();
  }

  findOne(Callcenter: CallcenterI) {
    return this.CallcenterModel.findOne(Callcenter);
  }

  update(_id: string, _updateCallcenterDto: UpdateCallcenterDto) {
    return this.CallcenterModel.findByIdAndUpdate(
      { _id },
      { $set: _updateCallcenterDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.CallcenterModel.deleteOne({ _id });
  }
}
