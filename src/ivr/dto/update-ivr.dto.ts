import { PartialType } from '@nestjs/mapped-types';
import { CreateIvrDto } from './create-ivr.dto';

export class UpdateIvrDto extends PartialType(CreateIvrDto) {}
