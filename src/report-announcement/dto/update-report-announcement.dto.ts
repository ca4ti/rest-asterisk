import { PartialType } from '@nestjs/mapped-types';
import { CreateReportAnnouncementDto } from './create-report-announcement.dto';

export class UpdateReportAnnouncementDto extends PartialType(
  CreateReportAnnouncementDto,
) {}
