import { Module } from '@nestjs/common';
import { PsRegistrationsService } from './ps-registrations.service';
import { PsRegistrationsController } from './ps-registrations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PsRegistrations,
  PsRegistrationsSchema,
} from './entities/ps-registrations.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsRegistrations.name, schema: PsRegistrationsSchema },
    ]),
  ],
  controllers: [PsRegistrationsController],
  providers: [PsRegistrationsService],
  exports: [PsRegistrationsService],
})
export class PsRegistrationsModule {}
