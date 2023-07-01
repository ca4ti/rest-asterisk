import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransferAssistedDocument = TransferAssisted & Document;

@Schema()
export class TransferAssisted {
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

export const TransferAssistedSchema = SchemaFactory.createForClass(TransferAssisted);
