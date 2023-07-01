import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsTrunkContactsDto } from './dto/create-ps-trunk-contacts.dto';
import { UpdatePsTrunkContactsDto } from './dto/update-ps-trunk-contacts.dto';
import { PsTrunkContacts, PsTrunkContactsDocument } from './entities/ps-trunk-contacts.entity';
import { PsTrunkContactsI } from './interfaces/ps-trunk-contacts.interfaces';

@Injectable()
export class PsTrunkContactsService {
  constructor(
    @InjectModel(PsTrunkContacts.name)
    private PsTrunkContactsModel: Model<PsTrunkContactsDocument>,
  ) {}

  create(createPsTrunkContactsDto: CreatePsTrunkContactsDto): Promise<PsTrunkContacts> {
    const getData = new this.PsTrunkContactsModel(createPsTrunkContactsDto);
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
    return this.PsTrunkContactsModel.find();
  }

  findOne(PsTrunkContacts: PsTrunkContactsI) {
    return this.PsTrunkContactsModel.findOne(PsTrunkContacts);
  }

  update(_id: string, _updatePsTrunkContactsDto: UpdatePsTrunkContactsDto) {
    return this.PsTrunkContactsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsTrunkContactsDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.PsTrunkContactsModel.deleteOne({ _id });
  }

  // ------------------------------------------------------------------------------

  reqStore(createPsTrunkContactsDto: CreatePsTrunkContactsDto) {
    const getData   = new this.PsTrunkContactsModel(createPsTrunkContactsDto);

    getData.save();

    return 1;
  }

  async reqMulti(req) {
    console.log("ORIGINAL DATA >>>>>>>>>>> ", req);

    const dados         = [];
    const dataStringify = JSON.stringify(req);

    if(dataStringify.includes("id")){
      const dataReplace   = dataStringify.replace("id LIKE", "endpoint").replace(/[;@%]/g, "");
      const data          = JSON.parse(dataReplace);
      const findData      = await this.PsTrunkContactsModel.findOne(data);

      if(findData == null){
        console.log("(NÃO EXISTE) => return 0");
        return 0;
      } else {
        console.log("(EXTISTE) => return DATA");
        dados.push('id=' + await findData.id + '&uri=' + await findData.uri + '&expiration_time=' + await findData.expiration_time + '&path=' + await findData.path+ '&user_agent=' + await findData.user_agent+ '&via_addr=' + await findData.via_addr + '&via_port=' + await findData.via_port + '&call_id=' + await findData.call_id + '&prune_on_boot=' + await findData.prune_on_boot + '&endpoint=' + await findData.endpoint);
        return JSON.stringify(dados).replace(/["|{}|\[\]]/g, '');
      }
    } 

    if(dataStringify.includes("expiration_time")){
      const timeStamp     = dataStringify.slice(dataStringify.length - 13);
      const dataReplace   = timeStamp.replace(/["|{}|\[\]]/g, '');
      const dataLike      = { expiration_time: { $lte : dataReplace } };
      const dataString    = JSON.stringify(dataLike);
      const json          = JSON.parse(dataString);
      const findData      = await this.PsTrunkContactsModel.findOne(json);
      console.log("JSON >>>>>", json);
      console.log("DATA >>>>>", findData);

      if(findData == null){
        console.log("(NÃO EXISTE ) => return 0");
        return 0;
      } else {
        console.log("(EXISTE) => return DATA");
        dados.push('id=' + await findData.id + '&uri=' + await findData.uri + '&expiration_time=' + await findData.expiration_time + '&path=' + await findData.path+ '&user_agent=' + await findData.user_agent+ '&via_addr=' + await findData.via_addr + '&via_port=' + await findData.via_port + '&call_id=' + await findData.call_id + '&prune_on_boot=' + await findData.prune_on_boot + '&endpoint=' + await findData.endpoint);
        return JSON.stringify(dados).replace(/["|{}|\[\]]/g, '');
      }
    } 
  }

  async reqSingle(PsTrunkContacts) {

    const dados = [];    
    const data  = this.PsTrunkContactsModel.findOne(PsTrunkContacts);

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

  successUpdate(req, obj){
    console.log(req);

    const res = this.PsTrunkContactsModel.findOneAndUpdate(
      { obj },
      { $set: req },
      function(error, result) {
        if (!error) {
          console.log(`Operation completed successfully`);
        } else {
          console.log(`An error occurred: ${error}`);
        }
      },
    );
  }

  reqDestroy(createPsTrunkContactsDto: CreatePsTrunkContactsDto) {
    this.PsTrunkContactsModel.deleteOne(createPsTrunkContactsDto);

    return 1;
  }

}
