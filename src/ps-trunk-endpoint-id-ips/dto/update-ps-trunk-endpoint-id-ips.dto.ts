import { PartialType } from '@nestjs/mapped-types';
import { CreatePsTrunkEndpointIdIpsDto } from './create-ps-trunk-endpoint-id-ips.dto';

export class UpdatePsTrunkEndpointIdIpsDto extends PartialType(CreatePsTrunkEndpointIdIpsDto) {}
