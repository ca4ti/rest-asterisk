import { PartialType } from '@nestjs/mapped-types';
import { CreateTransferAssistedDto } from './create-transfer-assisted.dto';

export class UpdateTransferAssistedDto extends PartialType(CreateTransferAssistedDto) {}
