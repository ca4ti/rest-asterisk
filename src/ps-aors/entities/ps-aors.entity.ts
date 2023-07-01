import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  RemoveExistingE,
  AuthenticateQualifyE,
  SupportPathE,
} from '../enum/ps-aors.enum';

export type PsAorsDocument = PsAors & Document;

@Schema()
export class PsAors {

  @Prop()
  id: string;

  @Prop()
  contact: string;

  @Prop()
  default_expiration: number;

  @Prop()
  mailboxes: string;

  @Prop()
  max_contacts: number;

  @Prop()
  minimum_expiration: number;

  @Prop()
  remove_existing: RemoveExistingE;

  @Prop()
  qualify_frequency: number;

  @Prop()
  authenticate_qualify: AuthenticateQualifyE;

  @Prop()
  maximum_expiration: number;

  @Prop()
  outbound_proxy: string;

  @Prop()
  support_path: SupportPathE;

  @Prop()
  qualify_timeout: number;

  @Prop()
  voicemail_extension: string;

  @Prop()
  status: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
  
  @Prop()
  "@CUSTOMERID": string;

  @Prop()
  "@USERID": string;

  @Prop()
  "@RAMAL": string;

  @Prop()
  "@NAME": string;
}

export const PsAorsSchema = SchemaFactory.createForClass(PsAors);
