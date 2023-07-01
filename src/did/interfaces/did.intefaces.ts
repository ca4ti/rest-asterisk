import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class DidI {
  @Prop()
  _id: string;

  @Prop()
  did: string;
}
