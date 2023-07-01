import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RinginUseE } from '../enum/queue-members.enum';

export type QueueMembersDocument = QueueMembers & Document;

@Schema()
export class QueueMembers {
  @Prop()
  type: string;

  @Prop()
  queue_name: string;

  @Prop()
  interface: string;

  @Prop()
  membername: string;

  @Prop()
  state_interface: string;

  @Prop()
  penalty: number;

  @Prop()
  paused: number;

  @Prop()
  uniqueid: number;

  @Prop()
  wrapuptime: number;

  @Prop()
  ringinuse: RinginUseE;

  @Prop()
  status: string;

  @Prop()
  customerId: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const QueueMembersSchema = SchemaFactory.createForClass(QueueMembers);
