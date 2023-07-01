import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RamalWhisperDocument = RamalWhisper & Document;

@Schema()
export class RamalWhisper {
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

export const RamalWhisperSchema = SchemaFactory.createForClass(RamalWhisper);
