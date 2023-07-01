import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsRegistrationsDto } from './dto/create-ps-registrations.dto';
import { UpdatePsRegistrationsDto } from './dto/update-ps-registrations.dto';
import {
  PsRegistrations,
  PsRegistrationsDocument,
} from './entities/ps-registrations.entity';
import { PsRegistrationsI } from './interfaces/ps-registrations.interfaces';

@Injectable()
export class PsRegistrationsService {
  constructor(
    @InjectModel(PsRegistrations.name)
    private PsRegistrationsModel: Model<PsRegistrationsDocument>,
  ) {}

  create(
    createPsRegistrationsDto: CreatePsRegistrationsDto,
  ): Promise<PsRegistrations> {
    const getData = new this.PsRegistrationsModel(createPsRegistrationsDto);
    const getFormatDate = new Date().toISOString();
    const includeData = {
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
    return this.PsRegistrationsModel.find();
  }

  async findOne(PsRegistrations: PsRegistrationsI) {
    return this.PsRegistrationsModel.findOne(PsRegistrations);
  }

  update(_id: string, _updatePsRegistrationsDto: UpdatePsRegistrationsDto) {
    return this.PsRegistrationsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsRegistrationsDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.PsRegistrationsModel.deleteOne({ _id });
  }

  // ------------------------------------------------------------

  reqStore(
    createPsRegistrationsDto: CreatePsRegistrationsDto,
  ): Promise<PsRegistrations> {
    const getData = new this.PsRegistrationsModel(createPsRegistrationsDto);
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
    const data = this.PsRegistrationsModel.find();
    const dados = [];

    for (const elemento of await data) {
      dados.push('name=' + elemento.outbound_auth);
    }

    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '\n');
  }

  async reqSingle(PsRegistrations) {
    const data = this.PsRegistrationsModel.findOne(PsRegistrations);
    const dados = [];

    dados.push(await data);
    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '&');
  }

  reqUpdate(_id: string, _updatePsRegistrationsDto: UpdatePsRegistrationsDto) {
    return this.PsRegistrationsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsRegistrationsDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.PsRegistrationsModel.deleteOne({ _id });
  }
}
