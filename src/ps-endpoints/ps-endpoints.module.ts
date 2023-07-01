import { Module } from '@nestjs/common';
import { PsEndpointsService } from './ps-endpoints.service';
import { PsEndpointsController } from './ps-endpoints.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PsEndpoints, PsEndpointsSchema } from './entities/ps-endpoints.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsEndpoints.name, schema: PsEndpointsSchema },
    ]),
  ],
  controllers: [PsEndpointsController],
  providers: [PsEndpointsService],
  exports: [PsEndpointsService],
})
export class PsEndpointsModule {}
