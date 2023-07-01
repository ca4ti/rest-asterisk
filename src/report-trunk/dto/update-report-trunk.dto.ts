import { PartialType } from '@nestjs/mapped-types';
import { CreateReportTrunkDto } from './create-report-trunk.dto';

export class UpdateReportTrunkDto extends PartialType(
  CreateReportTrunkDto,
) {}
