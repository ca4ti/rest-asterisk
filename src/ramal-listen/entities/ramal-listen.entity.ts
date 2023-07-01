import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RamalListenDocument = RamalListen & Document;

@Schema()
export class RamalListen {
  @Prop()
  type: string;

  @Prop({ type: {} })
  // eslint-disable-next-line @typescript-eslint/ban-types
  channel: {};

  @Prop()
  status: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const RamalListenSchema = SchemaFactory.createForClass(RamalListen);
