import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExtensionsEmergencyDto } from './dto/create-extensions-emergency.dto';
import { UpdateExtensionsEmergencyDto } from './dto/update-extensions-emergency.dto';
import { ExtensionsEmergency, ExtensionsEmergencyDocument } from './entities/extensions-emergency.entity';
import { ExtensionsEmergencyI } from './interfaces/extensions-emergency.interfaces';

@Injectable()
export class ExtensionsEmergencyService {
  constructor(
    @InjectModel(ExtensionsEmergency.name)
    private ExtensionsEmergencyModel: Model<ExtensionsEmergencyDocument>,
  ) {}

  async create(createExtensionsEmergencyDto: CreateExtensionsEmergencyDto): Promise<ExtensionsEmergency> {
    const getData = new this.ExtensionsEmergencyModel(createExtensionsEmergencyDto);
    const getFormatDate = new Date().toISOString();

    const includeData = {
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
      status: 'active',
      approved: 'true'
    };
    
    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  findAll() {
    return this.ExtensionsEmergencyModel.find().exec();
  }

  async findOne(ExtensionsEmergency: ExtensionsEmergencyI) {
    const customerId  = { "customerId": ExtensionsEmergency.customerId };
    const userId      = { "userId": ExtensionsEmergency.userId };
    const userSip     = { "userSip": ExtensionsEmergency.userSip };
    const exten       = { "channel.exten": ExtensionsEmergency.exten };
    const findData    = Object.assign(customerId, userId, userSip, exten);
    const data        = await this.ExtensionsEmergencyModel.findOne(findData); 

    if(data){
      return data; 
    } else {
      return '{ "data": "Not Found or Not Existent" }'; 
    }
  }

  update(_id: string, updateExtensionsEmergencyDto: UpdateExtensionsEmergencyDto) {
    this.ExtensionsEmergencyModel.findByIdAndUpdate(
      { _id },
      { $set: updateExtensionsEmergencyDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.ExtensionsEmergencyModel.deleteOne({ _id });
  }
}
