import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsDomainAliasesDto } from './dto/create-ps-domain-aliases.dto';
import { UpdatePsDomainAliasesDto } from './dto/update-ps-domain-aliases.dto';
import {
  PsDomainAliases,
  PsDomainAliasesDocument,
} from './entities/ps-domain-aliases.entity';
import { PsDomainAliasesI } from './interfaces/ps-domain-aliases.interfaces';

@Injectable()
export class PsDomainAliasesService {
  constructor(
    @InjectModel(PsDomainAliases.name)
    private PsDomainAliasesModel: Model<PsDomainAliasesDocument>,
  ) {}

  create(
    createPsDomainAliasesDto: CreatePsDomainAliasesDto,
  ): Promise<PsDomainAliases> {
    const getData = new this.PsDomainAliasesModel(createPsDomainAliasesDto);
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
    return this.PsDomainAliasesModel.find();
  }

  findOne(PsDomainAliases: PsDomainAliasesI) {
    return this.PsDomainAliasesModel.findOne(PsDomainAliases);
  }

  update(_id: string, _updatePsDomainAliasesDto: UpdatePsDomainAliasesDto) {
    return this.PsDomainAliasesModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsDomainAliasesDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.PsDomainAliasesModel.deleteOne({ _id });
  }

  // ----------------------------------------------------------------------------

  reqStore(
    createPsDomainAliasesDto: CreatePsDomainAliasesDto,
  ): Promise<PsDomainAliases> {
    const getData = new this.PsDomainAliasesModel(createPsDomainAliasesDto);
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
    const data = this.PsDomainAliasesModel.find();
    const dados = [];

    for (const elemento of await data) {
      dados.push('name=' + elemento.domain);
    }

    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '\n');
  }

  async reqSingle(PsDomainAliases) {
    const data          = this.PsDomainAliasesModel.findOne(PsDomainAliases);
    const dataStringify = JSON.stringify(PsDomainAliases);
    const dados         = [];

    if(dataStringify.includes("asterisk")){
      return -1;
    } 
    if(dataStringify.includes("45.")){
      return -1;
    } 
    else {
      if(data){
        dados.push(await data);
        const convert = JSON.stringify(dados);

        return convert
          .replace(/["|{}|\[\]]/g, '')
          .replace(/[:]/g, '=')
          .replace(/[,]/g, '&');
      } else {
        return -1;
      }
    }
  }

  reqUpdate(_id: string, _updatePsDomainAliasesDto: UpdatePsDomainAliasesDto) {
    return this.PsDomainAliasesModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsDomainAliasesDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.PsDomainAliasesModel.deleteOne({ _id });
  }

}
