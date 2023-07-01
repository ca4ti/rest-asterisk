import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PsTrunkDomainAliasesDocument = PsTrunkDomainAliases & Document;

@Schema()
export class PsTrunkDomainAliases {
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

export const PsTrunkDomainAliasesSchema =
  SchemaFactory.createForClass(PsTrunkDomainAliases);
