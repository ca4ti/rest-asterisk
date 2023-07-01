import { PartialType } from '@nestjs/mapped-types';
import { CreatePsRamalDto } from './create-ps-ramal.dto';

export class UpdatePsRamalDto extends PartialType(CreatePsRamalDto) {}
