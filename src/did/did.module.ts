import { Module } from '@nestjs/common';
import { DidService } from './did.service';
import { DidController } from './did.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Did, DidSchema } from './entities/did.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Did.name, schema: DidSchema }])],
  controllers: [DidController],
  providers: [DidService],
})
export class DidModule {}
