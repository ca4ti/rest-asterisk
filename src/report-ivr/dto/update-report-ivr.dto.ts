import { PartialType } from '@nestjs/mapped-types';
import { CreateReportIvrDto } from './create-report-ivr.dto';

export class UpdateReportIvrDto extends PartialType(CreateReportIvrDto) {}
