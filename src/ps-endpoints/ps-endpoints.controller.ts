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
import { PsEndpointsService } from './ps-endpoints.service';
import { CreatePsEndpointsDto } from './dto/create-ps-endpoints.dto';
import { UpdatePsEndpointsDto } from './dto/update-ps-endpoints.dto';
import { PsEndpointsI } from './interfaces/ps-endpoints.interfaces';

@Controller('ps-endpoints')
export class PsEndpointsController {
  constructor(private readonly PsendpointsService: PsEndpointsService) {}

  @Post('create')
  create(@Body() createPsendpointsDto: CreatePsEndpointsDto) {
    return this.PsendpointsService.create(createPsendpointsDto);
  }

  @Get()
  findAll() {
    return this.PsendpointsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() Psendpoints: PsEndpointsI) {
    return this.PsendpointsService.findOne(Psendpoints);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsendpointsDto: UpdatePsEndpointsDto) {
    return this.PsendpointsService.update(id, updatePsendpointsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PsendpointsService.remove(id);
  }


  // --------------------------------------------------


  @Post('store')
  Store(@Body() createPsendpointsDto: CreatePsEndpointsDto) {
    return this.PsendpointsService.create(createPsendpointsDto);
  }

  @Post('multi')
  Multi() {
    return this.PsendpointsService.reqMulti();
  }

  @Post('single')
  Single(@Body() Psendpoints: PsEndpointsI) {
    return this.PsendpointsService.reqSingle(Psendpoints);
  }

  @All('update')
  Update(@Query('id') id: any, @Body() data: any) {
    return this.PsendpointsService.reqUpdate(id, data);
  }

  @Post('destroy')
  Destroy(@Param('id') id: string) {
    return this.PsendpointsService.reqDestroy(id);
  }

}
