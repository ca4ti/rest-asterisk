import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AuthenticateQualifyE, PruneOnBootE } from '../enum/ps-trunk-contacts.enum';

export type PsTrunkContactsDocument = PsTrunkContacts & Document;

@Schema()
export class PsTrunkContacts {

  @Prop()
  id: string;

  @Prop()
  uri: string;

  @Prop()
  expiration_time: number;

  @Prop()
  qualify_frequency: number;

  @Prop()
  outbound_proxy: string;

  @Prop()
  path: string;

  @Prop()
  user_agent: string;

  @Prop()
  qualify_timeout: number;

  @Prop()
  reg_server: string;

  @Prop()
  authenticate_qualify: AuthenticateQualifyE;

  @Prop()
  via_addr: string;

  @Prop()
  via_port: number;

  @Prop()
  call_id: string;

  @Prop()
  endpoint: string;

  @Prop()
  prune_on_boot: PruneOnBootE;
  
}

export const PsTrunkContactsSchema = SchemaFactory.createForClass(PsTrunkContacts);
