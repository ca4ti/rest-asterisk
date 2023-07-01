import { PartialType } from '@nestjs/mapped-types';
import { CreatePsAuthsDto } from './create-ps-auths.dto';

export class UpdatePsAuthsDto extends PartialType(CreatePsAuthsDto) {}
