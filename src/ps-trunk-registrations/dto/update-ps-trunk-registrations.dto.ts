import { PartialType } from '@nestjs/mapped-types';
import { CreatePsTrunkRegistrationsDto } from './create-ps-trunk-registrations.dto';

export class UpdatePsTrunkRegistrationsDto extends PartialType(
  CreatePsTrunkRegistrationsDto,
) {}
