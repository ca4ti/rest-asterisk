import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsEndpointIdIpsDto } from './dto/create-ps-endpoint-id-ips.dto';
import { UpdatePsEndpointIdIpsDto } from './dto/update-ps-endpoint-id-ips.dto';
import {
  PsEndpointIdIps,
  PsEndpointIdIpsDocument,
} from './entities/ps-endpoint-id-ips.entity';
import { PsEndpointIdIpsI } from './interfaces/ps-endpoint-id-ips.interfaces';

@Injectable()
export class PsEndpointIdIpsService {
  constructor(
    @InjectModel(PsEndpointIdIps.name)
    private PsEndpointIdIpsModel: Model<PsEndpointIdIpsDocument>,
  ) {}

  create(
    createPsEndpointIdIpsDto: CreatePsEndpointIdIpsDto,
  ): Promise<PsEndpointIdIps> {
    const getData = new this.PsEndpointIdIpsModel(createPsEndpointIdIpsDto);
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
    return this.PsEndpointIdIpsModel.find();
  }

  findOne(PsEndpointIdIps: PsEndpointIdIpsI) {
    return this.PsEndpointIdIpsModel.findOne(PsEndpointIdIps);
  }

  update(_id: string, _updatePsEndpointIdIpsDto: UpdatePsEndpointIdIpsDto) {
    return this.PsEndpointIdIpsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsEndpointIdIpsDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.PsEndpointIdIpsModel.deleteOne({ _id });
  }

  // --------------------------------------------------------------------------

  reqStore(
    createPsEndpointIdIpsDto: CreatePsEndpointIdIpsDto,
  ): Promise<PsEndpointIdIps> {
    const getData = new this.PsEndpointIdIpsModel(createPsEndpointIdIpsDto);
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
    const data = this.PsEndpointIdIpsModel.find();
    const dados = [];

    for (const elemento of await data) {
      dados.push('name=' + elemento.endpoint);
    }

    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '\n');
  }

  async reqSingle(PsEndpointIdIps) {
    const data = this.PsEndpointIdIpsModel.findOne(PsEndpointIdIps);
    const dados = [];

    dados.push(await data);
    const convert = JSON.stringify(dados);

    console.log('PsEndpointIdIps/findSingle');

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '&');
  }

  reqUpdate(_id: string, _updatePsEndpointIdIpsDto: UpdatePsEndpointIdIpsDto) {
    return this.PsEndpointIdIpsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsEndpointIdIpsDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.PsEndpointIdIpsModel.deleteOne({ _id });
  }

}
