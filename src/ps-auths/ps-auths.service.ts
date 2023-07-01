import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsAuthsDto } from './dto/create-ps-auths.dto';
import { UpdatePsAuthsDto } from './dto/update-ps-auths.dto';
import { PsAuths, PsAuthsDocument } from './entities/ps-auths.entity';
import { PsAuthsI } from './interfaces/ps-auths.interfaces';

@Injectable()
export class PsAuthsService {
  constructor(
    @InjectModel(PsAuths.name) private PsAuthsModel: Model<PsAuthsDocument>,
  ) {}

  create(createPsAuthsDto: CreatePsAuthsDto): Promise<PsAuths> {
    const getData = new this.PsAuthsModel(createPsAuthsDto);
    const getFormatDate = new Date().toISOString();

    const includeData = {
      auth_type : "userpass",
      nonce_lifetime : 0,
      md5_cred : "",
      realm : "",
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
      status: 'active',
    };
    
    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  findAll() {
    return this.PsAuthsModel.find();
  }


  findOne(PsAuths: PsAuthsI) {
    return this.PsAuthsModel.findOne(PsAuths);
  }

  update(_id: string, _updatePsAuthsDto: UpdatePsAuthsDto) {
    return this.PsAuthsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsAuthsDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.PsAuthsModel.deleteOne({ _id });
  }

  // --------------------------------------------------

  reqStore(createPsAuthsDto: CreatePsAuthsDto): Promise<PsAuths> {
    const getData = new this.PsAuthsModel(createPsAuthsDto);
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
    const data = this.PsAuthsModel.find();
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

  async reqSingle(PsAuths) {
    const data = await this.PsAuthsModel.findOne(PsAuths);
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

  reqUpdate(_id: string, _updatePsAuthsDto: UpdatePsAuthsDto) {
    return this.PsAuthsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsAuthsDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.PsAuthsModel.deleteOne({ _id });
  }


}
