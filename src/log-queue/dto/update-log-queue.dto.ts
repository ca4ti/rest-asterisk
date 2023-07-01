import { PartialType } from '@nestjs/mapped-types';
import { CreateLogQueueDto } from './create-log-queue.dto';

export class UpdateLogQueueDto extends PartialType(CreateLogQueueDto) {}
