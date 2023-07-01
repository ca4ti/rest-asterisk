import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';
import { TransferAssistedService } from './transfer-assisted.service';
import { TransferAssistedI } from './interfaces/transfer-assisted.interfaces';

@Controller('transfer-assisted')
export class TransferAssistedController {
  constructor(private readonly transferAssistedService: TransferAssistedService) {}

  @Post('findBy')
  findOne(@Body() transferAssisted: TransferAssistedI) {
    return this.transferAssistedService.findOne(transferAssisted);
  }
}
