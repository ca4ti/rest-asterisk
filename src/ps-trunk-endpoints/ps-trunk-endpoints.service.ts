import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsTrunkEndpointsDto } from './dto/create-ps-trunk-endpoints.dto';
import { UpdatePsTrunkEndpointsDto } from './dto/update-ps-trunk-endpoints.dto';
import {
  PsTrunkEndpoints,
  PsTrunkEndpointsDocument,
} from './entities/ps-trunk-endpoints.entity';
import { PsTrunkEndpointsI } from './interfaces/ps-trunk-endpoints.interfaces';

@Injectable()
export class PsTrunkEndpointsService {
  constructor(
    @InjectModel(PsTrunkEndpoints.name)
    private PsTrunkEndpointsModel: Model<PsTrunkEndpointsDocument>,
  ) {}

  create(
    createPsTrunkEndpointsDto: CreatePsTrunkEndpointsDto,
  ): Promise<PsTrunkEndpoints> {
    const getData = new this.PsTrunkEndpointsModel(createPsTrunkEndpointsDto);
    const getFormatDate = new Date().toISOString();
    const includeData = {
      disallow: "all",
      allow: "alaw,vp8",
      direct_media: "no",
      dtmf_mode: "rfc4733",
      force_rport: "yes",
      identify_by: "ip,auth_username,username",
      rewrite_contact: "no",
      rtp_symmetric: "no",
      send_diversion: "yes",
      send_pai: "yes",
      send_rpid: "yes",
      trust_id_inbound: "yes",
      fax_detect: "no",
      sdp_owner: "twconnect",
      sdp_session: "VirtPBX.TwConnect",
      accountcode: "2",
      status: 'active',
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
    };
    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  findAll() {
    return this.PsTrunkEndpointsModel.find();
  }

  findOne(PsTrunkEndpoints: PsTrunkEndpointsI) {
    return this.PsTrunkEndpointsModel.findOne(PsTrunkEndpoints);
  }

  update(_id: string, _updatePsTrunkEndpointsDto: UpdatePsTrunkEndpointsDto) {
    return this.PsTrunkEndpointsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkEndpointsDto },
      { new: true },
    );
  }

  remove(id: PsTrunkEndpointsI) {
    return this.PsTrunkEndpointsModel.deleteOne({ "@TRUNKID": id });
  }

  // ---------------------------------------------------------

  async reqStore(
    createPsTrunkEndpointsDto: CreatePsTrunkEndpointsDto,
  ): Promise<PsTrunkEndpoints> {
    const getData = new this.PsTrunkEndpointsModel(createPsTrunkEndpointsDto);
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

  async reqMulti() {
    const data = this.PsTrunkEndpointsModel.find();
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

    const data    = await this.PsTrunkEndpointsModel.findOne(req);
    const dados   = [];

    if(data){
      dados.push(await data);
      const convert = JSON.stringify(dados);
  
      return convert.replace(/["|{}|\[\]]/g, '').replace(/[:]/g, '=').replace(/[,]/g, '&');
    } else {
      return 0;
    }

  }

  reqUpdate(_id: string, _updatePsTrunkEndpointsDto: UpdatePsTrunkEndpointsDto) {
    return this.PsTrunkEndpointsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkEndpointsDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.PsTrunkEndpointsModel.deleteOne(PsTrunkEndpoints);
  }

}
