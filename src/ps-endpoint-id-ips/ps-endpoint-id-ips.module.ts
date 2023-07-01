import { Module } from '@nestjs/common';
import { PsEndpointIdIpsService } from './ps-endpoint-id-ips.service';
import { PsEndpointIdIpsController } from './ps-endpoint-id-ips.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PsEndpointIdIps,
  PsEndpointIdIpsSchema,
} from './entities/ps-endpoint-id-ips.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsEndpointIdIps.name, schema: PsEndpointIdIpsSchema },
    ]),
  ],
  controllers: [PsEndpointIdIpsController],
  providers: [PsEndpointIdIpsService],
})
export class PsEndpointIdIpsModule {}
