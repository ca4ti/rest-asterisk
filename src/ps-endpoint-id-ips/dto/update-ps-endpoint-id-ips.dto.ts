import { PartialType } from '@nestjs/mapped-types';
import { CreatePsEndpointIdIpsDto } from './create-ps-endpoint-id-ips.dto';

export class UpdatePsEndpointIdIpsDto extends PartialType(CreatePsEndpointIdIpsDto) {}
