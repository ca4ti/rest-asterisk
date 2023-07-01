import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransferDirect, TransferDirectDocument } from './entities/transfer-direct.entity';
import { TransferDirectI } from './interfaces/transfer-direct.interfaces';
import { PsEndpointsService } from 'src/ps-endpoints/ps-endpoints.service';

@Injectable()
export class TransferDirectService {
  constructor(
    @InjectModel(TransferDirect.name)
    private TransferDirectModel: Model<TransferDirectDocument>,
    private readonly psEndpoints: PsEndpointsService,
  ) {}

  async findOne(TransferDirect: TransferDirectI) {
    const data = {
      "@CUSTOMERID": TransferDirect.customerId,
      "@USERID": TransferDirect.userId,
      "auth": TransferDirect.destination
    };

    const dataFind           = Object.assign(data);
    const dataEndpoint       = await this.psEndpoints.findOne(dataFind);

    if(dataEndpoint){
      if(TransferDirect.customerId != dataEndpoint['@CUSTOMERID']){
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
