import { Module } from '@nestjs/common';
import { UuidService } from './uuid.service';
import { UuidController } from './uuid.controller';

@Module({
  controllers: [UuidController],
  providers: [UuidService],
})
export class UuidModule {}
