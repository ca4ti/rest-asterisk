import { Module } from '@nestjs/common';
import { PsContactsService } from './ps-contacts.service';
import { PsContactsController } from './ps-contacts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PsContacts, PsContactsSchema } from './entities/ps-contacts.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsContacts.name, schema: PsContactsSchema },
    ]),
  ],
  controllers: [PsContactsController],
  providers: [PsContactsService],
})
export class PsContactsModule {}
