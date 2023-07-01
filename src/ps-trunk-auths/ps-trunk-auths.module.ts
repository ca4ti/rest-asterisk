import { Module } from '@nestjs/common';
import { PsTrunkAuthsService } from './ps-trunk-auths.service';
import { PsTrunkAuthsController } from './ps-trunk-auths.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PsTrunkAuths, PsTrunkAuthsSchema } from './entities/ps-trunk-auths.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PsTrunkAuths.name, schema: PsTrunkAuthsSchema }]),
  ],
  controllers: [PsTrunkAuthsController],
  providers: [PsTrunkAuthsService],
  exports: [PsTrunkAuthsService]
})
export class PsTrunkAuthsModule {}
