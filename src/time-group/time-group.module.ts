import { Module } from '@nestjs/common';
import { TimeGroupService } from './time-group.service';
import { TimeGroupController } from './time-group.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeGroup, TimeGroupSchema } from './entities/time-group.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TimeGroup.name, schema: TimeGroupSchema },
    ]),
  ],
  controllers: [TimeGroupController],
  providers: [TimeGroupService],
})
export class TimeGroupModule {}
