import { PartialType } from '@nestjs/mapped-types';
import { CreateReportExtensionsEmergencyDto } from './create-report-extensions-emergency.dto';

export class UpdateReportExtensionsEmergencyDto extends PartialType(
  CreateReportExtensionsEmergencyDto,
) {}
