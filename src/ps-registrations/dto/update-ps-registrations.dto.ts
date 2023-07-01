import { PartialType } from '@nestjs/mapped-types';
import { CreatePsRegistrationsDto } from './create-ps-registrations.dto';

export class UpdatePsRegistrationsDto extends PartialType(
  CreatePsRegistrationsDto,
) {}
