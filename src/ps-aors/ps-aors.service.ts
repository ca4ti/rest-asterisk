import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsAorsDto } from './dto/create-ps-aors.dto';
import { UpdatePsAorsDto } from './dto/update-ps-aors.dto';
import { PsAors, PsAorsDocument } from './entities/ps-aors.entity';
import { PsAorsI } from './interfaces/ps-aors.interfaces';

@Injectable()
export class PsAorsService {
  constructor(
    @InjectModel(PsAors.name) private PsAorsModel: Model<PsAorsDocument>,
  ) {}

  async create(createPsAorsDto: CreatePsAorsDto): Promise<PsAors> {
    const getData       = new this.PsAorsModel(createPsAorsDto);
    const getFormatDate = new Date().toISOString();

    const includeData = {
      contact : "",
      mailboxes : "",
      remove_existing : "yes",
      authenticate_qualify : "yes",
      outbound_proxy : "",
      support_path : "no",
      voicemail_extension : "",
      max_contacts: 10,
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
    return this.PsAorsModel.find();
  }

  async findOne(PsAors: PsAorsI) {
    return this.PsAorsModel.findOne(PsAors);
  }

  update(_id: string, _updatePsAorsDto: UpdatePsAorsDto) {
    return this.PsAorsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsAorsDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.PsAorsModel.deleteOne({ _id });
  }

  // ---------------------------------------------------------

  async reqStore(createPsAorsDto: CreatePsAorsDto): Promise<PsAors> {
    const getData = new this.PsAorsModel(createPsAorsDto);
    return getData.save();
  }

  async reqMulti() {
    const data = this.PsAorsModel.find();
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

  async reqSingle(PsAors) {
    console.log(PsAors);

    const data = await this.PsAorsModel.findOne(PsAors);
    const dados = [];

    dados.push(
      "id=" + data.id + 
      "&contact=" + data.contact + 
      "&default_expiration=" + data.default_expiration +
      "&mailboxes=" + data.mailboxes + 
      "&max_contacts=" + data.max_contacts + 
      "&minimum_expiration=" + data.minimum_expiration +
      "&remove_existing=" + data.remove_existing + 
      "&qualify_frequency=" + data.qualify_frequency + 
      "&authenticate_qualify=" + data.authenticate_qualify + 
      "&maximum_expiration=" + data.maximum_expiration + 
      "&outbound_proxy=" + data.outbound_proxy + 
      "&support_path=" + data.support_path + 
      "&qualify_timeout=" + data.qualify_timeout + 
      "&voicemail_extension=" + data.voicemail_extension
    );

    const convert = JSON.stringify(dados);
    
    console.log(convert.replace(/["|{}|\[\]]/g, ''));
    return convert.replace(/["|{}|\[\]]/g, '');
  }

  async reqUpdate(_id: string, _updatePsAorsDto: UpdatePsAorsDto) {
    return this.PsAorsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsAorsDto },
      { new: true },
    );
  }

  async reqDestroy(_id: string) {
    return this.PsAorsModel.deleteOne({ _id });
  }

}
