import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsTrunkAorsDto } from './dto/create-ps-trunk-aors.dto';
import { UpdatePsTrunkAorsDto } from './dto/update-ps-trunk-aors.dto';
import { PsTrunkAors, PsTrunkAorsDocument } from './entities/ps-trunk-aors.entity';
import { PsTrunkAorsI } from './interfaces/ps-trunk-aors.interfaces';

@Injectable()
export class PsTrunkAorsService {

  constructor(
    @InjectModel(PsTrunkAors.name) 
    private PsTrunkAorsModel: Model<PsTrunkAorsDocument>,
  ) {}

  async create(createPsTrunkAorsDto: CreatePsTrunkAorsDto): Promise<PsTrunkAors> {
    const getData       = new this.PsTrunkAorsModel(createPsTrunkAorsDto);
    const getFormatDate = new Date().toISOString();

    const includeData = {
      max_contacts: 10,
      remove_existing: "yes",
      qualify_frequency: 3600,
      minimum_expiration: 60,
      default_expiration: 3600,
      maximum_expiration:  7200, 
      qualify_timeout: 3,
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
      status: 'active',
    };

    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  findAll() {
    return this.PsTrunkAorsModel.find();
  }

  async findOne(PsTrunkAors: PsTrunkAorsI) {
    return this.PsTrunkAorsModel.findOne(PsTrunkAors);
  }

  update(_id: string, _updatePsTrunkAorsDto: UpdatePsTrunkAorsDto) {
    return this.PsTrunkAorsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkAorsDto },
      { new: true },
    );
  }

  remove(id: PsTrunkAorsI) {
    return this.PsTrunkAorsModel.deleteOne({ "@TRUNKID": id });
  }

  // ---------------------------------------------------------

  async reqStore(createPsTrunkAorsDto: CreatePsTrunkAorsDto): Promise<PsTrunkAors> {
    const getData = new this.PsTrunkAorsModel(createPsTrunkAorsDto);
    return getData.save();
  }

  async reqMulti() {
    const data = this.PsTrunkAorsModel.find();
    const dados = [];

    for (const elemento of await data) {
      dados.push('id=' + elemento.id);
    }

    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '\n');
  }

  async reqSingle(req) {
    console.log(req);

    const data = await this.PsTrunkAorsModel.findOne(req);
    const dados = [];

    dados.push('id=' + (await data).id + '&max_contacts=' + (await data).max_contacts + '&remove_existing=' + (await data).remove_existing + '&qualify_frequency=' + (await data).qualify_frequency + '&contact=' + (await data).contact);
    const convert = JSON.stringify(dados);

    return convert.replace(/["|{}|\[\]]/g, '').replace(/[,]/g, '\n');
  }

  async reqUpdate(_id: string, _updatePsTrunkAorsDto: UpdatePsTrunkAorsDto) {
    return this.PsTrunkAorsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkAorsDto },
      { new: true },
    );
  }

  async reqDestroy(_id: string) {
    return this.PsTrunkAorsModel.deleteOne({ _id });
  }


  // ---------------------------------------------------------

  

}
