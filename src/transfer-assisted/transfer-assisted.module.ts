import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransferAssistedService } from './transfer-assisted.service';
import { TransferAssistedController } from './transfer-assisted.controller';
import { TransferAssisted, TransferAssistedSchema } from './entities/transfer-assisted.entity';
import { PsEndpointsModule } from 'src/ps-endpoints/ps-endpoints.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TransferAssisted.name, schema: TransferAssistedSchema },
    ]),
    PsEndpointsModule,
  ],
  controllers: [TransferAssistedController],
  providers: [TransferAssistedService]
})
export class TransferAssistedModule {}
