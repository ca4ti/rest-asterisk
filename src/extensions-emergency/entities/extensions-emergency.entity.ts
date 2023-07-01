import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TrueFalseE } from '../enum/extensions-emergency.enum';
import { Document } from 'mongoose';

export type ExtensionsEmergencyDocument = ExtensionsEmergency & Document;

@Schema()
export class ExtensionsEmergency {
  @Prop()
  type: string;

  @Prop({ type: {} })
  // eslint-disable-next-line @typescript-eslint/ban-types
  channel: {};

  @Prop()
  status: string;

  @Prop()
  approved: TrueFalseE;

  @Prop()
  customerId: string;

  @Prop()
  userSip: string;

  @Prop()
  userId: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const ExtensionsEmergencySchema = SchemaFactory.createForClass(ExtensionsEmergency);
