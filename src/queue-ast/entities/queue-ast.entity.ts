import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QueueAstDocument = QueueAst & Document;

@Schema()
export class QueueAst {
  @Prop()
  type: string;

  @Prop({ type: {} })
  channel: string;

  @Prop()
  status: string;

  @Prop()
  customerId: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const QueueAstSchema = SchemaFactory.createForClass(QueueAst);
