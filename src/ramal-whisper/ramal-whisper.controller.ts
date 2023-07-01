import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';
import { RamalWhisperService } from './ramal-whisper.service';
import { CreateRamalWhisperDto } from './dto/create-ramal-whisper.dto';
import { UpdateRamalWhisperDto } from './dto/update-ramal-whisper.dto';
import { RamalWhisperI } from './interfaces/ramal-whisper.interfaces';

@Controller('ramal-whisper')
export class RamalWhisperController {
  constructor(private readonly RamalWhisperService: RamalWhisperService) {}

  @Post('findBy')
  findOne(@Body() RamalWhisper: RamalWhisperI) {
    return this.RamalWhisperService.findOne(RamalWhisper);
  }

}
