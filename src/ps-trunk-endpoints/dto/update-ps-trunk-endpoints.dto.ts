import { PartialType } from '@nestjs/mapped-types';
import { CreatePsTrunkEndpointsDto } from './create-ps-trunk-endpoints.dto';

export class UpdatePsTrunkEndpointsDto extends PartialType(CreatePsTrunkEndpointsDto) {}
