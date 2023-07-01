import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';
import { RamalGetService } from './ramal-get.service';
import { CreateRamalGetDto } from './dto/create-ramal-get.dto';
import { UpdateRamalGetDto } from './dto/update-ramal-get.dto';
import { RamalGetI } from './interfaces/ramal-get.interfaces';

@Controller('ramal-get')
export class RamalGetController {
  constructor(private readonly RamalGetService: RamalGetService) {}

  @Post('findBy')
  findOne(@Body() RamalGet: RamalGetI) {
    return this.RamalGetService.findOne(RamalGet);
  }
  
}
