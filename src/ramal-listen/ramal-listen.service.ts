import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRamalListenDto } from './dto/create-ramal-listen.dto';
import { UpdateRamalListenDto } from './dto/update-ramal-listen.dto';
import { RamalListen, RamalListenDocument } from './entities/ramal-listen.entity';
import { RamalListenI } from './interfaces/ramal-listen.interfaces';
import { PsEndpointsService } from 'src/ps-endpoints/ps-endpoints.service';

@Injectable()
export class RamalListenService {
  constructor(
    @InjectModel(RamalListen.name)
    private RamalListenModel: Model<RamalListenDocument>,
    private readonly psEndpoints: PsEndpointsService,
  ) {}

  async findOne(RamalListen: RamalListenI) {
    const data = {
      "@CUSTOMERID": RamalListen.customerId,
      "@USERID": RamalListen.userId,
      "auth": RamalListen.destination
    };

    const dataFind           = Object.assign(data);
    const dataEndpoint       = await this.psEndpoints.findOne(dataFind);

    if(dataEndpoint){
      if(RamalListen.customerId != dataEndpoint['@CUSTOMERID']){
        return '{ "authorized": "False" }';
      } else {
        if(dataEndpoint.transfer == 'true'){
          if(dataEndpoint){
            const result = {
              "sip": dataEndpoint.id,
              "userid": dataEndpoint['@USERID'],
              "dialed": dataEndpoint.aors
            };
            return result;
          } else {
            return '{ "authorized": "False" }';
          }
        }else {
          return '{ "authorized": "False" }';
        }
      }
    } else {
      return '{ "authorized": "False" }';
    }
  }

}
