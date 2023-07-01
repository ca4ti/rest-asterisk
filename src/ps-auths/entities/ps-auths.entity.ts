import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AuthTypeE } from '../enum/ps-auths.enum';

export type PsAuthsDocument = PsAuths & Document;

@Schema()
export class PsAuths {

  @Prop()
  id: string;

  @Prop()
  auth_type: AuthTypeE;

  @Prop()
  nonce_lifetime: number;

  @Prop()
  md5_cred: string;

  @Prop()
  password: string;

  @Prop()
  realm: string;

  @Prop()
  username: string;

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

export const PsAuthsSchema = SchemaFactory.createForClass(PsAuths);
