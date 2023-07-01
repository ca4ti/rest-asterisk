import { PartialType } from '@nestjs/mapped-types';
import { CreatePsTrunkAuthsDto } from './create-ps-trunk-auths.dto';

export class UpdatePsTrunkAuthsDto extends PartialType(CreatePsTrunkAuthsDto) {}
