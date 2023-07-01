import { Module } from '@nestjs/common';
import { PsTrunkEndpointsService } from './ps-trunk-endpoints.service';
import { PsTrunkEndpointsController } from './ps-trunk-endpoints.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PsTrunkEndpoints, PsTrunkEndpointsSchema } from './entities/ps-trunk-endpoints.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsTrunkEndpoints.name, schema: PsTrunkEndpointsSchema },
    ]),
  ],
  controllers: [PsTrunkEndpointsController],
  providers: [PsTrunkEndpointsService],
  exports: [PsTrunkEndpointsService]
})
export class PsTrunkEndpointsModule {}
