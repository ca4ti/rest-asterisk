import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PsRamalDocument = PsRamal & Document;

@Schema()
export class PsRamal {

  @Prop({ type: {} })
  psRamal: {};

}

export const PsRamalSchema = SchemaFactory.createForClass(PsRamal);
