import { PartialType } from '@nestjs/mapped-types';
import { CreatePsTrunkDomainAliasesDto } from './create-ps-trunk-domain-aliases.dto';

export class UpdatePsTrunkDomainAliasesDto extends PartialType(
  CreatePsTrunkDomainAliasesDto,
) {}
