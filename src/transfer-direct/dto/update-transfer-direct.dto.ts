import { PartialType } from '@nestjs/mapped-types';
import { CreateTransferDirectDto } from './create-transfer-direct.dto';

export class UpdateTransferDirectDto extends PartialType(CreateTransferDirectDto) {}
