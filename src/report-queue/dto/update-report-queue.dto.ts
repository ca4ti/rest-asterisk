import { PartialType } from '@nestjs/mapped-types';
import { CreateReportQueueDto } from './create-report-queue.dto';

export class UpdateReportQueueDto extends PartialType(CreateReportQueueDto) {}
