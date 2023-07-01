import { Module } from '@nestjs/common';
import { PsTrunkEndpointIdIpsService } from './ps-trunk-endpoint-id-ips.service';
import { PsTrunkEndpointIdIpsController } from './ps-trunk-endpoint-id-ips.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PsTrunkEndpointIdIps,
  PsTrunkEndpointIdIpsSchema,
} from './entities/ps-trunk-endpoint-id-ips.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsTrunkEndpointIdIps.name, schema: PsTrunkEndpointIdIpsSchema },
    ]),
  ],
  controllers: [PsTrunkEndpointIdIpsController],
  providers: [PsTrunkEndpointIdIpsService],
})
export class PsTrunkEndpointIdIpsModule {}
