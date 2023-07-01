import { Module } from '@nestjs/common';
import { QueueMembersService } from './queue-members.service';
import { QueueMembersController } from './queue-members.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  QueueMembers,
  QueueMembersSchema,
} from './entities/queue-members.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QueueMembers.name, schema: QueueMembersSchema },
    ]),
  ],
  controllers: [QueueMembersController],
  providers: [QueueMembersService],
})
export class QueueMembersModule {}
