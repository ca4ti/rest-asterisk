import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeGroupDto } from './create-time-group.dto';

export class UpdateTimeGroupDto extends PartialType(CreateTimeGroupDto) {}
