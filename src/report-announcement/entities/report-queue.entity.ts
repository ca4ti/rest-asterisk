import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportAnnouncementDocument = ReportAnnouncement & Document;

@Schema()
export class ReportAnnouncement {
  @Prop()
  type: string;

  @Prop()
  address: string;

  @Prop({ type: {} })
  // eslint-disable-next-line @typescript-eslint/ban-types
  data: {};

  @Prop()
  status: string;

  @Prop()
  customerId: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const ReportAnnouncementSchema =
  SchemaFactory.createForClass(ReportAnnouncement);
