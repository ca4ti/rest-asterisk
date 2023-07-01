import { PartialType } from '@nestjs/mapped-types';
import { CreateRamalWhisperDto } from './create-ramal-whisper.dto';

export class UpdateRamalWhisperDto extends PartialType(CreateRamalWhisperDto) {}
