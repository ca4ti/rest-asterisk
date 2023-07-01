import { PartialType } from '@nestjs/mapped-types';
import { CreatePsEndpointsDto } from './create-ps-endpoints.dto';

export class UpdatePsEndpointsDto extends PartialType(CreatePsEndpointsDto) {}
