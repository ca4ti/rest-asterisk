import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { YesNoE } from '../enum/ps-registrations.enum';

export type PsRegistrationsDocument = PsRegistrations & Document;

@Schema()
export class PsRegistrations {
  @Prop()
  id: string;

  @Prop()
  auth_rejection_permanent: YesNoE;

  @Prop()
  client_uri: string;

  @Prop()
  contact_user: string;

  @Prop()
  expiration: number;

  @Prop()
  max_retries: number;

  @Prop()
  outbound_auth: string;

  @Prop()
  outbound_proxy: string;

  @Prop()
  retry_interval: number;

  @Prop()
  forbidden_retry_interval: number;

  @Prop()
  server_uri: string;

  @Prop()
  transport: string;

  @Prop()
  support_path: YesNoE;

  @Prop()
  fatal_retry_interval: number;

  @Prop()
  line: YesNoE;

  @Prop()
  endpoint: string;

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

export const PsRegistrationsSchema =
  SchemaFactory.createForClass(PsRegistrations);
