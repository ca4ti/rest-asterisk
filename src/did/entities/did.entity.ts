import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DidDocument = Did & Document;

@Schema()
export class Did {
  @Prop()
  type: string;

  @Prop({ type: {} })
  // eslint-disable-next-line @typescript-eslint/ban-types
  channel: {};

  @Prop()
  status: string;

  @Prop()
  customerId: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const DidSchema = SchemaFactory.createForClass(Did);
