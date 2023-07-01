import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExtensionsDto } from './dto/create-extensions.dto';
import { UpdateExtensionsDto } from './dto/update-extensions.dto';
import { Extensions, ExtensionsDocument } from './entities/extensions.entity';
import { ExtensionsI } from './interfaces/extensions.interfaces';

@Injectable()
export class ExtensionsService {
  constructor(
    @InjectModel(Extensions.name)
    private ExtensionsModel: Model<ExtensionsDocument>,
  ) {}

  async create(createExtensionsDto: CreateExtensionsDto): Promise<Extensions> {
    const getData = new this.ExtensionsModel(createExtensionsDto);
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
    return this.ExtensionsModel.find().exec();
  }

  findOne(Extensions: ExtensionsI) {
    return this.ExtensionsModel.findOne(Extensions);
  }

  update(_id: string, updateExtensionsDto: UpdateExtensionsDto) {
    return this.ExtensionsModel.findByIdAndUpdate(
      { _id },
      { $set: updateExtensionsDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.ExtensionsModel.deleteOne({ _id });
  }
}
