import { PartialType } from '@nestjs/mapped-types';
import { CreatePsTrunkAorsDto } from './create-ps-trunk-aors.dto';

export class UpdatePsTrunkAorsDto extends PartialType(CreatePsTrunkAorsDto) {}
