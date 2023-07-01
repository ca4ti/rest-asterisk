import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PsTrunkDocument = PsTrunk & Document;

@Schema()
export class PsTrunk {

  @Prop({ type: {} })
  psTrunk: {};

}

export const PsTrunkSchema = SchemaFactory.createForClass(PsTrunk);
