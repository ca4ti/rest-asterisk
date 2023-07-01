import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QueueRulesDocument = QueueRules & Document;

@Schema()
export class QueueRules {
  @Prop()
  type: string;

  @Prop()
  rule_name: string;

  @Prop()
  time: string;

  @Prop()
  min_penalty: string;

  @Prop()
  max_penalty: string;

  @Prop()
  status: string;

  @Prop()
  customerId: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const QueueRulesSchema = SchemaFactory.createForClass(QueueRules);
