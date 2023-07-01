import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AuthTypeE } from '../enum/ps-trunk-auths.enum';

export type PsTrunkAuthsDocument = PsTrunkAuths & Document;

@Schema()
export class PsTrunkAuths {
  @Prop()
  type: string;

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

export const PsTrunkAuthsSchema = SchemaFactory.createForClass(PsTrunkAuths);
