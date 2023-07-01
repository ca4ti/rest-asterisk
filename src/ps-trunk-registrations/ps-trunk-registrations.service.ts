import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsTrunkRegistrationsDto } from './dto/create-ps-trunk-registrations.dto';
import { UpdatePsTrunkRegistrationsDto } from './dto/update-ps-trunk-registrations.dto';
import {
  PsTrunkRegistrations,
  PsTrunkRegistrationsDocument,
} from './entities/ps-trunk-registrations.entity';
import { PsTrunkRegistrationsI } from './interfaces/ps-trunk-registrations.interfaces';

@Injectable()
export class PsTrunkRegistrationsService {
  constructor(
    @InjectModel(PsTrunkRegistrations.name)
    private PsTrunkRegistrationsModel: Model<PsTrunkRegistrationsDocument>,
  ) {}

  create(
    createPsTrunkRegistrationsDto: CreatePsTrunkRegistrationsDto,
  ): Promise<PsTrunkRegistrations> {
    const getData       = new this.PsTrunkRegistrationsModel(createPsTrunkRegistrationsDto);
    const getFormatDate = new Date().toISOString();

    const includeData   = {
      auth_rejection_permanent: "no",
      transport: "transport-udp",
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
      status: 'active',
    };

    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  findAll() {
    return this.PsTrunkRegistrationsModel.find();
  }

  async findOne(PsTrunkRegistrations: PsTrunkRegistrationsI) {
    return this.PsTrunkRegistrationsModel.findOne(PsTrunkRegistrations);
  }

  update(_id: string, _updatePsTrunkRegistrationsDto: UpdatePsTrunkRegistrationsDto) {
    return this.PsTrunkRegistrationsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkRegistrationsDto },
      { new: true },
    );
  }

  remove(id: PsTrunkRegistrationsI) {
    return this.PsTrunkRegistrationsModel.deleteOne({ "@TRUNKID": id });
  }

  // ------------------------------------------------------------

  reqStore(
    createPsTrunkRegistrationsDto: CreatePsTrunkRegistrationsDto,
  ): Promise<PsTrunkRegistrations> {
    const getData = new this.PsTrunkRegistrationsModel(createPsTrunkRegistrationsDto);
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
    const data = this.PsTrunkRegistrationsModel.find();
    const dados = [];

    for (const elemento of await data) {
      const idReplace = elemento.outbound_auth.replace("auth", "reg");
      dados.push('id=' + idReplace + '&auth_rejection_permanent=' + elemento.auth_rejection_permanent + '&client_uri=' + elemento.client_uri + '&contact_user=' + elemento.contact_user + '&outbound_auth=' + elemento.outbound_auth + '&server_uri=' + elemento.server_uri + '&transport=' + elemento.transport);
    }

    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[,]/g, '\n');
  }

  async reqSingle(req) {
    console.log(req);

    const data = await this.PsTrunkRegistrationsModel.findOne(req);
    const dados = [];

    if(data){
      dados.push('id=' + (await data).id + '&auth_rejection_permanent=' + (await data).auth_rejection_permanent + '&client_uri=' + (await data).client_uri + '&contact_user=' + (await data).contact_user + '&outbound_auth=' + (await data).outbound_auth + '&server_uri=' + (await data).server_uri + '&transport=' + (await data).transport);
      const convert = JSON.stringify(dados);
      return convert;
    } else {
      return 0;
    }
  }

  reqUpdate(_id: string, _updatePsTrunkRegistrationsDto: UpdatePsTrunkRegistrationsDto) {
    return this.PsTrunkRegistrationsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkRegistrationsDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.PsTrunkRegistrationsModel.deleteOne({ _id });
  }
}
