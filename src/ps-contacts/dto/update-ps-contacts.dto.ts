import { PartialType } from '@nestjs/mapped-types';
import { CreatePsContactsDto } from './create-ps-contacts.dto';

export class UpdatePsContactsDto extends PartialType(CreatePsContactsDto) {}
