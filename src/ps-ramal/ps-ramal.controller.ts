import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    All,
    Query,
  } from '@nestjs/common';
  import { PsRamalService } from './ps-ramal.service';
  import { CreatePsRamalDto } from './dto/create-ps-ramal.dto';
  import { UpdatePsRamalDto } from './dto/update-ps-ramal.dto';
  import { PsRamalI } from './interfaces/ps-ramal.interfaces';
  
  @Controller('ps-ramal')
  export class PsRamalController {
    constructor(private readonly PsRamalService: PsRamalService) {}
  
    @Post('insert')
    create(@Body() createPsRamalDto: CreatePsRamalDto) {
      return this.PsRamalService.create(createPsRamalDto);
    }
  
    @Post('findBy')
    findOne(@Body() PsRamal: PsRamalI) {
      return this.PsRamalService.findOne(PsRamal);
    }
  
    @Patch(':id')
    update(@Param('id') id: any, @Body() updatePsRamalDto: UpdatePsRamalDto) {
      return this.PsRamalService.update(id, updatePsRamalDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: any) {
      return this.PsRamalService.remove(id);
    }
  
  }
  