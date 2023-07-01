import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IvrDocument = Ivr & Document;

@Schema()
export class Ivr {
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

export const IvrSchema = SchemaFactory.createForClass(Ivr);
