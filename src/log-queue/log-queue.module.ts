import { Module } from '@nestjs/common';
import { LogQueueService } from './log-queue.service';
import { LogQueueController } from './log-queue.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LogQueue, LogQueueSchema } from './entities/log-queue.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LogQueue.name, schema: LogQueueSchema },
    ]),
  ],
  controllers: [LogQueueController],
  providers: [LogQueueService],
})
export class LogQueueModule {}
