import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SrvLookupsE } from '../enum/ps-trunk-endpoint-id-ips.enum';

export type PsTrunkEndpointIdIpsDocument = PsTrunkEndpointIdIps & Document;

@Schema()
export class PsTrunkEndpointIdIps {
  @Prop()
  type: string;

  @Prop()
  endpoint: string;

  @Prop()
  match: string;

  @Prop()
  srv_lookups: SrvLookupsE;

  @Prop()
  match_header: string;

  @Prop()
  status: string;

  @Prop()
  customerId: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const PsTrunkEndpointIdIpsSchema =
  SchemaFactory.createForClass(PsTrunkEndpointIdIps);
