import { PartialType } from '@nestjs/mapped-types';
import { CreatePsAorsDto } from './create-ps-aors.dto';

export class UpdatePsAorsDto extends PartialType(CreatePsAorsDto) {}
