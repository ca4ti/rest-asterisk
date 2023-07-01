import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsTrunkEndpointIdIpsDto } from './dto/create-ps-trunk-endpoint-id-ips.dto';
import { UpdatePsTrunkEndpointIdIpsDto } from './dto/update-ps-trunk-endpoint-id-ips.dto';
import {
  PsTrunkEndpointIdIps,
  PsTrunkEndpointIdIpsDocument,
} from './entities/ps-trunk-endpoint-id-ips.entity';
import { PsTrunkEndpointIdIpsI } from './interfaces/ps-trunk-endpoint-id-ips.interfaces';

@Injectable()
export class PsTrunkEndpointIdIpsService {
  constructor(
    @InjectModel(PsTrunkEndpointIdIps.name)
    private PsTrunkEndpointIdIpsModel: Model<PsTrunkEndpointIdIpsDocument>,
  ) {}

  create(
    createPsTrunkEndpointIdIpsDto: CreatePsTrunkEndpointIdIpsDto,
  ): Promise<PsTrunkEndpointIdIps> {
    const getData = new this.PsTrunkEndpointIdIpsModel(createPsTrunkEndpointIdIpsDto);
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
    return this.PsTrunkEndpointIdIpsModel.find();
  }

  findOne(PsTrunkEndpointIdIps: PsTrunkEndpointIdIpsI) {
    return this.PsTrunkEndpointIdIpsModel.findOne(PsTrunkEndpointIdIps);
  }

  update(_id: string, _updatePsTrunkEndpointIdIpsDto: UpdatePsTrunkEndpointIdIpsDto) {
    return this.PsTrunkEndpointIdIpsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkEndpointIdIpsDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.PsTrunkEndpointIdIpsModel.deleteOne({ _id });
  }

  // --------------------------------------------------------------------------

  reqStore(
    createPsTrunkEndpointIdIpsDto: CreatePsTrunkEndpointIdIpsDto,
  ): Promise<PsTrunkEndpointIdIps> {
    const getData = new this.PsTrunkEndpointIdIpsModel(createPsTrunkEndpointIdIpsDto);
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

  async reqMulti(req) {
    const data = this.PsTrunkEndpointIdIpsModel.find();
    const dados = [];

    for (const elemento of await data) {
      dados.push('name=' + elemento.endpoint);
    }

    const convert = JSON.stringify(dados);

    return 1;
    
    /*convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '\n');*/
  }

  async reqSingle(PsTrunkEndpointIdIps) {
    const data = this.PsTrunkEndpointIdIpsModel.findOne(PsTrunkEndpointIdIps);
    const dados = [];

    dados.push(await data);
    const convert = JSON.stringify(dados);

    console.log('PsTrunkEndpointIdIps/findSingle');

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '&');
  }

  reqUpdate(_id: string, _updatePsTrunkEndpointIdIpsDto: UpdatePsTrunkEndpointIdIpsDto) {
    return this.PsTrunkEndpointIdIpsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkEndpointIdIpsDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.PsTrunkEndpointIdIpsModel.deleteOne({ _id });
  }

}
