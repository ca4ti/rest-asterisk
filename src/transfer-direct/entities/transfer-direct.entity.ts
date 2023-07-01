import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransferDirectDocument = TransferDirect & Document;

@Schema()
export class TransferDirect {
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

export const TransferDirectSchema = SchemaFactory.createForClass(TransferDirect);
