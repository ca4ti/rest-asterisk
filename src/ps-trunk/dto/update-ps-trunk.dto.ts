import { PartialType } from '@nestjs/mapped-types';
import { CreatePsTrunkDto } from './create-ps-trunk.dto';

export class UpdatePsTrunkDto extends PartialType(CreatePsTrunkDto) {}
