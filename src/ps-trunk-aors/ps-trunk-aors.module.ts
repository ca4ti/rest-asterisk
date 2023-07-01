import { Module } from '@nestjs/common';
import { PsTrunkAorsService } from './ps-trunk-aors.service';
import { PsTrunkAorsController } from './ps-trunk-aors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PsTrunkAors, PsTrunkAorsSchema } from './entities/ps-trunk-aors.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PsTrunkAors.name, schema: PsTrunkAorsSchema }]),
  ],
  controllers: [PsTrunkAorsController],
  providers: [PsTrunkAorsService],
  exports: [PsTrunkAorsService],
})
export class PsTrunkAorsModule {}
