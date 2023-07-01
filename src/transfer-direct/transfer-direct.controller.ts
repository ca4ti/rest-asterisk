import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';
import { TransferDirectService } from './transfer-direct.service';
import { TransferDirectI } from './interfaces/transfer-direct.interfaces';

@Controller('transfer-direct')
export class TransferDirectController {
  constructor(private readonly transferDirectService: TransferDirectService) {}

  @Post('findBy')
  findOne(@Body() transferDirect: TransferDirectI) {
    return this.transferDirectService.findOne(transferDirect);
  }

}
