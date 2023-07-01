import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHangupDto } from './dto/create-hangup.dto';
import { UpdateHangupDto } from './dto/update-hangup.dto';
import { Hangup, HangupDocument } from './entities/hangup.entity';
import { HangupI } from './interfaces/hangup.interfaces';

@Injectable()
export class HangupService {
  constructor(
    @InjectModel(Hangup.name)
    private HangupModel: Model<HangupDocument>,
  ) {}

  async create(createHangupDto: CreateHangupDto): Promise<Hangup> {
    const getData = new this.HangupModel(createHangupDto);
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
    return this.HangupModel.find().exec();
  }

  findOne(Hangup: HangupI) {
    return this.HangupModel.findOne(Hangup);
  }

  update(_id: string, updateHangupDto: UpdateHangupDto) {
    return this.HangupModel.findByIdAndUpdate(
      { _id },
      { $set: updateHangupDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.HangupModel.deleteOne({ _id });
  }
}
