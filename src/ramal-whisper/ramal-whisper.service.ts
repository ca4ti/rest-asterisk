import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RamalWhisper, RamalWhisperDocument } from './entities/ramal-whisper.entity';
import { RamalWhisperI } from './interfaces/ramal-whisper.interfaces';
import { PsEndpointsService } from 'src/ps-endpoints/ps-endpoints.service';

@Injectable()
export class RamalWhisperService {
  constructor(
    @InjectModel(RamalWhisper.name)
    private RamalWhisperModel: Model<RamalWhisperDocument>,
    private readonly psEndpoints: PsEndpointsService,
  ) {}

  async findOne(RamalWhisper: RamalWhisperI) {
    const data = {
      "@CUSTOMERID": RamalWhisper.customerId,
      "@USERID": RamalWhisper.userId,
      "auth": RamalWhisper.destination
    };

    const dataFind           = Object.assign(data);
    const dataEndpoint       = await this.psEndpoints.findOne(dataFind);

    if(dataEndpoint){
      if(RamalWhisper.customerId != dataEndpoint['@CUSTOMERID']){
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
