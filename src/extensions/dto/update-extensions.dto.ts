import { PartialType } from '@nestjs/mapped-types';
import { CreateExtensionsDto } from './create-extensions.dto';

export class UpdateExtensionsDto extends PartialType(CreateExtensionsDto) {}
