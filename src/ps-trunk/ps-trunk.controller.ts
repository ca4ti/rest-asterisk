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
  import { PsTrunkService } from './ps-trunk.service';
  import { CreatePsTrunkDto } from './dto/create-ps-trunk.dto';
  import { UpdatePsTrunkDto } from './dto/update-ps-trunk.dto';
  import { PsTrunkI } from './interfaces/ps-trunk.interfaces';
  
  @Controller('ps-trunk')
  export class PsTrunkController {
    constructor(private readonly PsTrunkService: PsTrunkService) {}
  
    @Post('insert')
    create(@Body() createPsTrunkDto: CreatePsTrunkDto) {
      return this.PsTrunkService.create(createPsTrunkDto);
    }
  
    @Post('findBy')
    findOne(@Body() PsTrunk: PsTrunkI) {
      return this.PsTrunkService.findOne(PsTrunk);
    }
  
    @Patch(':id')
    update(@Param('id') id: any, @Body() updatePsTrunkDto: UpdatePsTrunkDto) {
      return this.PsTrunkService.update(id, updatePsTrunkDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: any) {
      return this.PsTrunkService.remove(id);
    }
  
  }
  