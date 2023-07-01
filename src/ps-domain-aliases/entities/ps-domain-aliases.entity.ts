import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PsDomainAliasesDocument = PsDomainAliases & Document;

@Schema()
export class PsDomainAliases {
  @Prop()
  type: string;

  @Prop()
  domain: string;

  @Prop()
  status: string;

  @Prop()
  customerId: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const PsDomainAliasesSchema =
  SchemaFactory.createForClass(PsDomainAliases);
