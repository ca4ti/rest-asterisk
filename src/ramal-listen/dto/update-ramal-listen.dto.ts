import { PartialType } from '@nestjs/mapped-types';
import { CreateRamalListenDto } from './create-ramal-listen.dto';

export class UpdateRamalListenDto extends PartialType(CreateRamalListenDto) {}
