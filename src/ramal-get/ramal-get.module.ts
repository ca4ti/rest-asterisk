import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RamalGetService } from './ramal-get.service';
import { RamalGetController } from './ramal-get.controller';
import { RamalGet, RamalGetSchema } from './entities/ramal-get.entity';
import { PsEndpointsModule } from 'src/ps-endpoints/ps-endpoints.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RamalGet.name, schema: RamalGetSchema },
    ]),
    PsEndpointsModule,
  ],
  controllers: [RamalGetController],
  providers: [RamalGetService]
})
export class RamalGetModule {}
