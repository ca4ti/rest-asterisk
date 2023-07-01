import { Module } from '@nestjs/common';
import { ReportExtensionsEmergencyService } from './report-extensions-emergency.service';
import { ReportExtensionsEmergencyController } from './report-extensions-emergency.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ReportExtensionsEmergency,
  ReportExtensionsEmergencySchema,
} from './entities/report-extensions-emergency.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReportExtensionsEmergency.name, schema: ReportExtensionsEmergencySchema },
    ]),
  ],
  controllers: [ReportExtensionsEmergencyController],
  providers: [ReportExtensionsEmergencyService],
})
export class ReportExtensionsEmergencyModule {}
