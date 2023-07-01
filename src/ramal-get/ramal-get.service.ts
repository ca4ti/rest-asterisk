import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRamalGetDto } from './dto/create-ramal-get.dto';
import { UpdateRamalGetDto } from './dto/update-ramal-get.dto';
import { RamalGet, RamalGetDocument } from './entities/ramal-get.entity';
import { RamalGetI } from './interfaces/ramal-get.interfaces';
import { PsEndpointsService } from 'src/ps-endpoints/ps-endpoints.service';

@Injectable()
export class RamalGetService {
  constructor(
    @InjectModel(RamalGet.name)
    private RamalGetModel: Model<RamalGetDocument>,
    private readonly psEndpoints: PsEndpointsService,
  ) {}

  async findOne(RamalGet: RamalGetI) {
    const data = {
      "@CUSTOMERID": RamalGet.customerId,
      "@USERID": RamalGet.userId,
      "auth": RamalGet.destination
    };

    const dataFind           = Object.assign(data);
    const dataEndpoint       = await this.psEndpoints.findOne(dataFind);

    if(dataEndpoint){
      if(RamalGet.customerId != dataEndpoint['@CUSTOMERID']){
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
