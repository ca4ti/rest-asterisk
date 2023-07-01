import { PartialType } from '@nestjs/mapped-types';
import { CreateCallcenterDto } from './create-callcenter.dto';

export class UpdateCallcenterDto extends PartialType(CreateCallcenterDto) {}
