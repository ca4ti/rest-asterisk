import { PartialType } from '@nestjs/mapped-types';
import { CreateReportDidDto } from './create-report-did.dto';

export class UpdateReportDidDto extends PartialType(CreateReportDidDto) {}
