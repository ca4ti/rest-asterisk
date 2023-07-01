import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { YesNoE } from '../enum/ps-trunk-registrations.enum';

export type PsTrunkRegistrationsDocument = PsTrunkRegistrations & Document;

@Schema()
export class PsTrunkRegistrations {

  @Prop()
  id: string;

  @Prop()
  type: string;

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
  "@CUSTOMERID": string;

  @Prop()
  "@USERID": string;

  @Prop()
  "@TRUNKID": string;

  @Prop()
  "@TECHPREFIX": string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const PsTrunkRegistrationsSchema =
  SchemaFactory.createForClass(PsTrunkRegistrations);
