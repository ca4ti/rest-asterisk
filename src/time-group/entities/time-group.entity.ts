import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TimeGroupDocument = TimeGroup & Document;

@Schema()
export class TimeGroup {
  @Prop({ type: {} })
  // eslint-disable-next-line @typescript-eslint/ban-types
  channel: {};

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
}

export const TimeGroupSchema = SchemaFactory.createForClass(TimeGroup);
