import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransferDirectService } from './transfer-direct.service';
import { TransferDirectController } from './transfer-direct.controller';
import { TransferDirect, TransferDirectSchema } from './entities/transfer-direct.entity';
import { PsEndpointsModule } from 'src/ps-endpoints/ps-endpoints.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TransferDirect.name, schema: TransferDirectSchema },
    ]),
    PsEndpointsModule,
  ],
  controllers: [TransferDirectController],
  providers: [TransferDirectService]
})
export class TransferDirectModule {}
