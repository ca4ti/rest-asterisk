import { PartialType } from '@nestjs/mapped-types';
import { CreateRamalGetDto } from './create-ramal-get.dto';

export class UpdateRamalGetDto extends PartialType(CreateRamalGetDto) {}
