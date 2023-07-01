import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsContactsDto } from './dto/create-ps-contacts.dto';
import { UpdatePsContactsDto } from './dto/update-ps-contacts.dto';
import { PsContacts, PsContactsDocument } from './entities/ps-contacts.entity';
import { PsContactsI } from './interfaces/ps-contacts.interfaces';

@Injectable()
export class PsContactsService {
  constructor(
    @InjectModel(PsContacts.name)
    private PsContactsModel: Model<PsContactsDocument>,
  ) { }

  create(createPsContactsDto: CreatePsContactsDto): Promise<PsContacts> {
    const getData = new this.PsContactsModel(createPsContactsDto);
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
    return this.PsContactsModel.find();
  }

  findOne(PsContacts: PsContactsI) {
    return this.PsContactsModel.findOne(PsContacts);
  }

  update(_id: string, _updatePsContactsDto: UpdatePsContactsDto) {
    return this.PsContactsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsContactsDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.PsContactsModel.deleteOne({ _id });
  }

  // ------------------------------------------------------------------------------

  reqStore(createPsContactsDto: CreatePsContactsDto) {
    console.log(createPsContactsDto);
    console.log(`Operation ( CREATE ) completed successfully`);
    const getData = new this.PsContactsModel(createPsContactsDto);
    getData.save();
    return 1;
  }

  async reqMulti(req) {
    console.log("ORIGINAL JSON >>>>>>>>>>> ", req);

    const dados = [];
    const dataStringify = JSON.stringify(req);

    if (dataStringify.includes("id")) {
      const dataReplace = dataStringify.replace("id LIKE", "endpoint").replace(/[;@%]/g, "");
      const data = JSON.parse(dataReplace);
      const findData = await this.PsContactsModel.findOne(data);

      if (findData == null) {
        console.log("(NÃO EXISTE) => return empty");
        // return -1;
      } else {
        console.log("(EXTISTE) => return DATA");
        dados.push('id=' + await findData.id + '&uri=' + await findData.uri + '&expiration_time=' + await findData.expiration_time + '&path=' + await findData.path + '&user_agent=' + await findData.user_agent + '&via_addr=' + await findData.via_addr + '&via_port=' + await findData.via_port + '&call_id=' + await findData.call_id + '&prune_on_boot=' + await findData.prune_on_boot + '&endpoint=' + await findData.endpoint);
        return JSON.stringify(dados).replace(/["|{}|\[\]]/g, '');
      }
    }

    if (dataStringify.includes("expiration_time")) {
      const timeStamp = dataStringify.slice(dataStringify.length - 13);
      const dataReplace = timeStamp.replace(/["|{}|\[\]]/g, '');
      const dataLike = { expiration_time: { $lte: dataReplace } };
      const dataString = JSON.stringify(dataLike);
      const json = JSON.parse(dataString);
      const findData = await this.PsContactsModel.findOne(json);
      console.log("JSON REPLACE >>>>>", json);
      console.log("JSON DATA >>>>>", findData);

      if (findData == null) {
        console.log("(NÃO EXISTE ) => return empty");
        // return 0;
      } else {
        console.log("(EXISTE) => return DATA");
        dados.push('id=' + await findData.id + '&uri=' + await findData.uri + '&expiration_time=' + await findData.expiration_time + '&path=' + await findData.path + '&user_agent=' + await findData.user_agent + '&via_addr=' + await findData.via_addr + '&via_port=' + await findData.via_port + '&call_id=' + await findData.call_id + '&prune_on_boot=' + await findData.prune_on_boot + '&endpoint=' + await findData.endpoint);
        return JSON.stringify(dados).replace(/["|{}|\[\]]/g, '');
      }
    }
  }

  async reqSingle(req) {
    console.log(req);

    const dados = [];
    const data = this.PsContactsModel.findOne(req);

    dados.push(await data);
    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '&');
  }


  reqUpdate(req, id) {
    console.log(req);

    const param = '{ "id" : "' + id + '" }';
    const obj = JSON.parse(param);

    this.successUpdate(req, obj);

    return 1;
  }

  async reqDestroy(req) {
    console.log(req);
    const destroy = await this.PsContactsModel.deleteOne(req);
    return destroy.deletedCount;
  }


  successUpdate(req, obj) {
    console.log(req);

    const res = this.PsContactsModel.findOneAndUpdate(
      { obj },
      { $set: req },
      function (error, result) {
        if (!error) {
          console.log(`Operation ( UPDATE ) completed successfully`);
        } else {
          console.log(`An error occurred: ${error}`);
        }
      },
    );
  }
}
