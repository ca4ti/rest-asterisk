import { Module } from '@nestjs/common';
import { PsTrunkService } from './ps-trunk.service';
import { PsTrunkController } from './ps-trunk.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PsTrunk, PsTrunkSchema } from './entities/ps-trunk.entity';
import { PsTrunkAorsModule } from 'src/ps-trunk-aors/ps-trunk-aors.module';
import { PsTrunkAuthsModule } from 'src/ps-trunk-auths/ps-trunk-auths.module';
import { PsTrunkEndpointsModule } from 'src/ps-trunk-endpoints/ps-trunk-endpoints.module';
import { PsTrunkRegistrationsModule } from 'src/ps-trunk-registrations/ps-trunk-registrations.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsTrunk.name, schema: PsTrunkSchema },
    ]),
    PsTrunkAorsModule,
    PsTrunkAuthsModule,
    PsTrunkEndpointsModule,
    PsTrunkRegistrationsModule,
  ],
  controllers: [PsTrunkController],
  providers: [PsTrunkService],
})
export class PsTrunkModule {}
