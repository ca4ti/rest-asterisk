import { PartialType } from '@nestjs/mapped-types';
import { CreateQueueRulesDto } from './create-queue-rules.dto';

export class UpdateQueueRulesDto extends PartialType(CreateQueueRulesDto) {}
