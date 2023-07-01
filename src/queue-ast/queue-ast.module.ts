import { Module } from '@nestjs/common';
import { QueueAstService } from './queue-ast.service';
import { QueueAstController } from './queue-ast.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QueueAst, QueueAstSchema } from './entities/queue-ast.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QueueAst.name, schema: QueueAstSchema },
    ]),
  ],
  controllers: [QueueAstController],
  providers: [QueueAstService],
})
export class QueueAstModule {}
