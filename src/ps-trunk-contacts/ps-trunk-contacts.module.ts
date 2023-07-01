import { Module } from '@nestjs/common';
import { PsTrunkContactsService } from './ps-trunk-contacts.service';
import { PsTrunkContactsController } from './ps-trunk-contacts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PsTrunkContacts, PsTrunkContactsSchema } from './entities/ps-trunk-contacts.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsTrunkContacts.name, schema: PsTrunkContactsSchema },
    ]),
  ],
  controllers: [PsTrunkContactsController],
  providers: [PsTrunkContactsService],
})
export class PsTrunkContactsModule {}
