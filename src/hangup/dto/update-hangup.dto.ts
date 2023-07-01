import { PartialType } from '@nestjs/mapped-types';
import { CreateHangupDto } from './create-hangup.dto';

export class UpdateHangupDto extends PartialType(CreateHangupDto) {}
