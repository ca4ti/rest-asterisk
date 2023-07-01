import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransferAssisted, TransferAssistedDocument } from './entities/transfer-assisted.entity';
import { TransferAssistedI } from './interfaces/transfer-assisted.interfaces';
import { PsEndpointsService } from 'src/ps-endpoints/ps-endpoints.service';

@Injectable()
export class TransferAssistedService {
  constructor(
    @InjectModel(TransferAssisted.name)
    private TransferAssistedModel: Model<TransferAssistedDocument>,
    private readonly psEndpoints: PsEndpointsService,
  ) {}

  async findOne(TransferAssisted: TransferAssistedI) {
    const data = {
      "@CUSTOMERID": TransferAssisted.customerId,
      "@USERID": TransferAssisted.userId,
      "auth": TransferAssisted.destination
    };

    const dataFind           = Object.assign(data);
    const dataEndpoint       = await this.psEndpoints.findOne(dataFind);

    if(dataEndpoint){
      if(TransferAssisted.customerId != dataEndpoint['@CUSTOMERID']){
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
