import { PartialType } from '@nestjs/mapped-types';
import { CreateExtensionsEmergencyDto } from './create-extensions-emergency.dto';

export class UpdateExtensionsEmergencyDto extends PartialType(CreateExtensionsEmergencyDto) {}
