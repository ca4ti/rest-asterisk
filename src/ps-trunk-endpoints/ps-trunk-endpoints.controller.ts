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
  import { PsTrunkEndpointsService } from './ps-trunk-endpoints.service';
  import { CreatePsTrunkEndpointsDto } from './dto/create-ps-trunk-endpoints.dto';
  import { UpdatePsTrunkEndpointsDto } from './dto/update-ps-trunk-endpoints.dto';
  import { PsTrunkEndpointsI } from './interfaces/ps-trunk-endpoints.interfaces';
  
  @Controller('ps-trunk-endpoints')
  export class PsTrunkEndpointsController {
    constructor(private readonly PsTrunkEndpointsService: PsTrunkEndpointsService) {}
  
    @Post('insert')
    create(@Body() createPsTrunkEndpointsDto: CreatePsTrunkEndpointsDto) {
      return this.PsTrunkEndpointsService.create(createPsTrunkEndpointsDto);
    }
  
    @Get()
    findAll() {
      return this.PsTrunkEndpointsService.findAll();
    }
  
    @Post('findBy')
    findOne(@Body() PsTrunkEndpoints: PsTrunkEndpointsI) {
      return this.PsTrunkEndpointsService.findOne(PsTrunkEndpoints);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePsTrunkEndpointsDto: UpdatePsTrunkEndpointsDto) {
      return this.PsTrunkEndpointsService.update(id, updatePsTrunkEndpointsDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: any) {
      return this.PsTrunkEndpointsService.remove(id);
    }
  
  
    // --------------------------------------------------
  
  
    @Post('store')
    Store(@Body() createPsTrunkEndpointsDto: CreatePsTrunkEndpointsDto) {
      return this.PsTrunkEndpointsService.create(createPsTrunkEndpointsDto);
    }
  
    @Post('multi')
    Multi() {
      return this.PsTrunkEndpointsService.reqMulti();
    }
  
    @Post('single')
    Single(@Body() PsTrunkEndpoints: PsTrunkEndpointsI) {
      return this.PsTrunkEndpointsService.reqSingle(PsTrunkEndpoints);
    }
  
    @All('update')
    Update(@Query('id') id: any, @Body() data: any) {
      return this.PsTrunkEndpointsService.reqUpdate(id, data);
    }
  
    @Post('destroy')
    Destroy(@Param('id') id: string) {
      return this.PsTrunkEndpointsService.reqDestroy(id);
    }
  
  }
  