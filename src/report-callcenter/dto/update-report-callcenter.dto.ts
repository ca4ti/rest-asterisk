import { PartialType } from '@nestjs/mapped-types';
import { CreateReportCallcenterDto } from './create-report-callcenter.dto';

export class UpdateReportCallcenterDto extends PartialType(
  CreateReportCallcenterDto,
) {}
