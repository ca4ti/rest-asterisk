import { Module } from '@nestjs/common';
import { IvrService } from './ivr.service';
import { IvrController } from './ivr.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ivr, IvrSchema } from './entities/ivr.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ivr.name, schema: IvrSchema }])],
  controllers: [IvrController],
  providers: [IvrService],
})
export class IvrModule {}
