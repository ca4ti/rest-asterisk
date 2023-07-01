import { PartialType } from '@nestjs/mapped-types';
import { CreateQueueMembersDto } from './create-queue-members.dto';

export class UpdateQueueMembersDto extends PartialType(CreateQueueMembersDto) {}
