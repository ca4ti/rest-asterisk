import { PartialType } from '@nestjs/mapped-types';
import { CreatePsTrunkContactsDto } from './create-ps-trunk-contacts.dto';

export class UpdatePsTrunkContactsDto extends PartialType(CreatePsTrunkContactsDto) {}
