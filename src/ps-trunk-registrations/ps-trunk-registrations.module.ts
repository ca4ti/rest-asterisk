import { Module } from '@nestjs/common';
import { PsTrunkRegistrationsService } from './ps-trunk-registrations.service';
import { PsTrunkRegistrationsController } from './ps-trunk-registrations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PsTrunkRegistrations,
  PsTrunkRegistrationsSchema,
} from './entities/ps-trunk-registrations.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsTrunkRegistrations.name, schema: PsTrunkRegistrationsSchema },
    ]),
  ],
  controllers: [PsTrunkRegistrationsController],
  providers: [PsTrunkRegistrationsService],
  exports: [PsTrunkRegistrationsService]
})
export class PsTrunkRegistrationsModule {}
