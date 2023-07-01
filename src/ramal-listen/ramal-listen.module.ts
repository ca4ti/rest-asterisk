import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RamalListenService } from './ramal-listen.service';
import { RamalListenController } from './ramal-listen.controller';
import { RamalListen, RamalListenSchema } from './entities/ramal-listen.entity';
import { PsEndpointsModule } from 'src/ps-endpoints/ps-endpoints.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RamalListen.name, schema: RamalListenSchema },
    ]),
    PsEndpointsModule,
  ],
  controllers: [RamalListenController],
  providers: [RamalListenService]
})
export class RamalListenModule {}
