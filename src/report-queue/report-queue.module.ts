import { Module } from '@nestjs/common';
import { ReportQueueService } from './report-queue.service';
import { ReportQueueController } from './report-queue.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportQueue, ReportQueueSchema } from './entities/report-queue.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReportQueue.name, schema: ReportQueueSchema },
    ]),
  ],
  controllers: [ReportQueueController],
  providers: [ReportQueueService],
})
export class ReportQueueModule {}
