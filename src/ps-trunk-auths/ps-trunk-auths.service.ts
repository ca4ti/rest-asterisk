import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsTrunkAuthsDto } from './dto/create-ps-trunk-auths.dto';
import { UpdatePsTrunkAuthsDto } from './dto/update-ps-trunk-auths.dto';
import { PsTrunkAuths, PsTrunkAuthsDocument } from './entities/ps-trunk-auths.entity';
import { PsTrunkAuthsI } from './interfaces/ps-trunk-auths.interfaces';

@Injectable()
export class PsTrunkAuthsService {
  constructor(
    @InjectModel(PsTrunkAuths.name) private PsTrunkAuthsModel: Model<PsTrunkAuthsDocument>,
  ) {}

  create(createPsTrunkAuthsDto: CreatePsTrunkAuthsDto): Promise<PsTrunkAuths> {
    const getData       = new this.PsTrunkAuthsModel(createPsTrunkAuthsDto);
    const getFormatDate = new Date().toISOString();

    const includeData   = {
      nonce_lifetime: 0,
      md5_cred: "",
      auth_type: "userpass",
      realm: "",
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
      status: 'active',
    };
    
    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  findAll() {
    return this.PsTrunkAuthsModel.find();
  }


  findOne(PsTrunkAuths: PsTrunkAuthsI) {
    return this.PsTrunkAuthsModel.findOne(PsTrunkAuths);
  }

  update(_id: string, _updatePsTrunkAuthsDto: UpdatePsTrunkAuthsDto) {
    return this.PsTrunkAuthsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkAuthsDto },
      { new: true },
    );
  }

  remove(id: PsTrunkAuthsI) {
    return this.PsTrunkAuthsModel.deleteOne({ "@TRUNKID": id });
  }

  // --------------------------------------------------

  reqStore(createPsTrunkAuthsDto: CreatePsTrunkAuthsDto): Promise<PsTrunkAuths> {
    const getData = new this.PsTrunkAuthsModel(createPsTrunkAuthsDto);
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

  async reqMulti() {
    const data = this.PsTrunkAuthsModel.find();
    const dados = [];

    for (const elemento of await data) {
      dados.push('name=' + elemento.username);
    }

    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '\n');
  }

  async reqSingle(PsTrunkAuths) {
    const data = await this.PsTrunkAuthsModel.findOne(PsTrunkAuths);
    const dados = [];

    if(data){
      dados.push(
        "id=" +data.id + 
        "&auth_type=" +data.auth_type + 
        "&nonce_lifetime=" +data.nonce_lifetime +
        "&md5_cred=" +data.md5_cred +
        "&password=" +data.password +
        "&realm=" +data.realm +
        "&username=" +data.username
        );
      
        const convert = JSON.stringify(dados);
        console.log(convert);
        return convert.replace(/["|{}|\[\]]/g, '');
    } else {
      return -1;
    }
  }

  reqUpdate(_id: string, _updatePsTrunkAuthsDto: UpdatePsTrunkAuthsDto) {
    return this.PsTrunkAuthsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkAuthsDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.PsTrunkAuthsModel.deleteOne({ _id });
  }


}
