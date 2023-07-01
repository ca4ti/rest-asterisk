import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTimeGroupDto } from './dto/create-time-group.dto';
import { UpdateTimeGroupDto } from './dto/update-time-group.dto';
import { TimeGroup, TimeGroupDocument } from './entities/time-group.entity';
import { TimeGroupI } from './interfaces/time-group.interface';

@Injectable()
export class TimeGroupService {
  constructor(
    @InjectModel(TimeGroup.name)
    private TimeGroupModel: Model<TimeGroupDocument>,
  ) {}

  async create(data: CreateTimeGroupDto): Promise<TimeGroup> {
    const getData = new this.TimeGroupModel(data);
    const getFormatDate = new Date().toISOString();
    // daysWeek => São dias da semana Ex.: 1:2:3:4:5:6:7
    const includeData = {
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
      status: 'active',
    };
    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  findAll() {
    return this.TimeGroupModel.find().exec();
  }

  findOne(TimeGroup: TimeGroupI) {
    return this.TimeGroupModel.findOne(TimeGroup);
  }

  update(_id: string, updateTimeGroupDto: UpdateTimeGroupDto) {
    return this.TimeGroupModel.findByIdAndUpdate(
      { _id },
      { $set: updateTimeGroupDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.TimeGroupModel.deleteOne({ _id });
  }
}
