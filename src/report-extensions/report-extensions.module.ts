import { Module } from '@nestjs/common';
import { ReportExtensionsService } from './report-extensions.service';
import { ReportExtensionsController } from './report-extensions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ReportExtensions,
  ReportExtensionsSchema,
} from './entities/report-extensions.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReportExtensions.name, schema: ReportExtensionsSchema },
    ]),
  ],
  controllers: [ReportExtensionsController],
  providers: [ReportExtensionsService],
})
export class ReportExtensionsModule {}
