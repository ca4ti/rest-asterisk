import { PartialType } from '@nestjs/mapped-types';
import { CreateReportHangupDto } from './create-report-hangup.dto';

export class UpdateReportHangupDto extends PartialType(CreateReportHangupDto) {}
