import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIvrDto } from './dto/create-ivr.dto';
import { UpdateIvrDto } from './dto/update-ivr.dto';
import { Ivr, IvrDocument } from './entities/ivr.entity';
import { IvrI } from './interfaces/ivr.interface';

@Injectable()
export class IvrService {
  constructor(
    @InjectModel(Ivr.name)
    private IvrModel: Model<IvrDocument>,
  ) {}

  async create(createIvrDto: CreateIvrDto): Promise<Ivr> {
    const getData = new this.IvrModel(createIvrDto);
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
    return this.IvrModel.find().exec();
  }

  findOne(Ivr: IvrI) {
    return this.IvrModel.findOne(Ivr);
  }

  update(_id: string, updateIvrDto: UpdateIvrDto) {
    return this.IvrModel.findByIdAndUpdate(
      { _id },
      { $set: updateIvrDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.IvrModel.deleteOne({ _id });
  }
}
