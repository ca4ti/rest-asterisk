import { Module } from '@nestjs/common';
import { PsAuthsService } from './ps-auths.service';
import { PsAuthsController } from './ps-auths.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PsAuths, PsAuthsSchema } from './entities/ps-auths.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PsAuths.name, schema: PsAuthsSchema }]),
  ],
  controllers: [PsAuthsController],
  providers: [PsAuthsService],
  exports: [PsAuthsService],
})
export class PsAuthsModule {}
