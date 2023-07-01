import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';
import { RamalListenService } from './ramal-listen.service';
import { CreateRamalListenDto } from './dto/create-ramal-listen.dto';
import { UpdateRamalListenDto } from './dto/update-ramal-listen.dto';
import { RamalListenI } from './interfaces/ramal-listen.interfaces';

@Controller('ramal-listen')
export class RamalListenController {
  constructor(private readonly RamalListenService: RamalListenService) {}

  @Post('findBy')
  findOne(@Body() RamalListen: RamalListenI) {
    return this.RamalListenService.findOne(RamalListen);
  }

}
