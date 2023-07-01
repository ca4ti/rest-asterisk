import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AuthenticateQualifyE, PruneOnBootE } from '../enum/ps-contacts.enum';

export type PsContactsDocument = PsContacts & Document;

@Schema()
export class PsContacts {

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
  qualify_timeout: string;

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

export const PsContactsSchema = SchemaFactory.createForClass(PsContacts);
