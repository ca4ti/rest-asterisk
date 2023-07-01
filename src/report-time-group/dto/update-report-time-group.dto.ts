import { PartialType } from '@nestjs/mapped-types';
import { CreateReportTimeGroupDto } from './create-report-time-group.dto';

export class UpdateReportTimeGroupDto extends PartialType(
  CreateReportTimeGroupDto,
) {}
