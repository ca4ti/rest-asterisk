import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CallcenterDocument = Callcenter & Document;

@Schema()
export class Callcenter {
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

export const CallcenterSchema = SchemaFactory.createForClass(Callcenter);
