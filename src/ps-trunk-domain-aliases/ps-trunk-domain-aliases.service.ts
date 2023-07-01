import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsTrunkDomainAliasesDto } from './dto/create-ps-trunk-domain-aliases.dto';
import { UpdatePsTrunkDomainAliasesDto } from './dto/update-ps-trunk-domain-aliases.dto';
import {
  PsTrunkDomainAliases,
  PsTrunkDomainAliasesDocument,
} from './entities/ps-trunk-domain-aliases.entity';
import { PsTrunkDomainAliasesI } from './interfaces/ps-trunk-domain-aliases.interfaces';

@Injectable()
export class PsTrunkDomainAliasesService {
  constructor(
    @InjectModel(PsTrunkDomainAliases.name)
    private PsTrunkDomainAliasesModel: Model<PsTrunkDomainAliasesDocument>,
  ) {}

  create(
    createPsTrunkDomainAliasesDto: CreatePsTrunkDomainAliasesDto,
  ): Promise<PsTrunkDomainAliases> {
    const getData = new this.PsTrunkDomainAliasesModel(createPsTrunkDomainAliasesDto);
    const getFormatDate = new Date().toISOString();
    const includeData = {
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
      status: 'active',
      '@USERID': 'd3f76d6e6de63326619f6a67',
      '@CUSTOMERID': '62e3e63f6dda97d36f667166',
      '@TRUNKID': 'd677807b06b0',
    };
    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  findAll() {
    return this.PsTrunkDomainAliasesModel.find();
  }

  findOne(PsTrunkDomainAliases: PsTrunkDomainAliasesI) {
    return this.PsTrunkDomainAliasesModel.findOne(PsTrunkDomainAliases);
  }

  update(_id: string, _updatePsTrunkDomainAliasesDto: UpdatePsTrunkDomainAliasesDto) {
    return this.PsTrunkDomainAliasesModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkDomainAliasesDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.PsTrunkDomainAliasesModel.deleteOne({ _id });
  }

  // ----------------------------------------------------------------------------

  reqStore(
    createPsTrunkDomainAliasesDto: CreatePsTrunkDomainAliasesDto,
  ): Promise<PsTrunkDomainAliases> {
    const getData = new this.PsTrunkDomainAliasesModel(createPsTrunkDomainAliasesDto);
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
    const data = this.PsTrunkDomainAliasesModel.find();
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

  async reqSingle(PsTrunkDomainAliases) {
    const data = this.PsTrunkDomainAliasesModel.findOne(PsTrunkDomainAliases);
    const dados = [];

    dados.push(await data);
    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '&');
  }

  reqUpdate(_id: string, _updatePsTrunkDomainAliasesDto: UpdatePsTrunkDomainAliasesDto) {
    return this.PsTrunkDomainAliasesModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkDomainAliasesDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.PsTrunkDomainAliasesModel.deleteOne({ _id });
  }

}
