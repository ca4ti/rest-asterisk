import { PartialType } from '@nestjs/mapped-types';
import { CreatePsDomainAliasesDto } from './create-ps-domain-aliases.dto';

export class UpdatePsDomainAliasesDto extends PartialType(
  CreatePsDomainAliasesDto,
) {}
