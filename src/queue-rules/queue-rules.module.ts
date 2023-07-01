import { Module } from '@nestjs/common';
import { QueueRulesService } from './queue-rules.service';
import { QueueRulesController } from './queue-rules.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QueueRules, QueueRulesSchema } from './entities/queue-rules.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QueueRules.name, schema: QueueRulesSchema },
    ]),
  ],
  controllers: [QueueRulesController],
  providers: [QueueRulesService],
})
export class QueueRulesModule {}
