import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import {
  Announcement,
  AnnouncementDocument,
} from './entities/announcement.entity';
import { AnnouncementI } from './interfaces/announcement.inteface';

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectModel(Announcement.name)
    private AnnouncementModel: Model<AnnouncementDocument>,
  ) {}

  async create(
    createAnnouncementDto: CreateAnnouncementDto,
  ): Promise<Announcement> {
    const getData = new this.AnnouncementModel(createAnnouncementDto);
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
    return this.AnnouncementModel.find().exec();
  }

  findOne(Announcement: AnnouncementI) {
    return this.AnnouncementModel.findOne(Announcement);
  }

  update(_id: string, _updateAnnouncementDto: UpdateAnnouncementDto) {
    return this.AnnouncementModel.findByIdAndUpdate(
      { _id },
      { $set: _updateAnnouncementDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.AnnouncementModel.deleteOne({ _id });
  }
}
