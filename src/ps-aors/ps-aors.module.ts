import { Module } from '@nestjs/common';
import { PsAorsService } from './ps-aors.service';
import { PsAorsController } from './ps-aors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PsAors, PsAorsSchema } from './entities/ps-aors.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PsAors.name, schema: PsAorsSchema }]),
  ],
  controllers: [PsAorsController],
  providers: [PsAorsService],
  exports: [PsAorsService],
})
export class PsAorsModule {}
