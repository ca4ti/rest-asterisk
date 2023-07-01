import { PartialType } from '@nestjs/mapped-types';
import { CreateReportExtensionsDto } from './create-report-extensions.dto';

export class UpdateReportExtensionsDto extends PartialType(
  CreateReportExtensionsDto,
) {}
