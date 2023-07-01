import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PsEndpointIdIpsService } from './ps-endpoint-id-ips.service';
import { CreatePsEndpointIdIpsDto } from './dto/create-ps-endpoint-id-ips.dto';
import { UpdatePsEndpointIdIpsDto } from './dto/update-ps-endpoint-id-ips.dto';
import { PsEndpointIdIpsI } from './interfaces/ps-endpoint-id-ips.interfaces';

@Controller('ps-endpoint-id-ips')
export class PsEndpointIdIpsController {
  constructor(
    private readonly PsEndpointIdIpsService: PsEndpointIdIpsService,
  ) {}

  @Post('insert')
  create(@Body() createPsEndpointIdIpsDto: CreatePsEndpointIdIpsDto) {
    return this.PsEndpointIdIpsService.create(createPsEndpointIdIpsDto);
  }

  @Get()
  findAll() {
    return this.PsEndpointIdIpsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsEndpointIdIps: PsEndpointIdIpsI) {
    return this.PsEndpointIdIpsService.findOne(PsEndpointIdIps);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePsEndpointIdIpsDto: UpdatePsEndpointIdIpsDto,
  ) {
    return this.PsEndpointIdIpsService.update(id, updatePsEndpointIdIpsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PsEndpointIdIpsService.remove(id);
  }

  // -------------------------------------------------------------------

  @Post('store')
  Store(@Body() createPsEndpointIdIpsDto: CreatePsEndpointIdIpsDto) {
    return this.PsEndpointIdIpsService.reqStore(createPsEndpointIdIpsDto);
  }

  @Post('multi')
  Multi() {
    return this.PsEndpointIdIpsService.reqMulti();
  }

  @Post('single')
  Single(@Body() PsEndpointIdIps: PsEndpointIdIpsI) {
    return this.PsEndpointIdIpsService.reqSingle(PsEndpointIdIps);
  }

  @Patch(':id')
  Update(
    @Param('id') id: string,
    @Body() updatePsEndpointIdIpsDto: UpdatePsEndpointIdIpsDto,
  ) {
    return this.PsEndpointIdIpsService.reqUpdate(id, updatePsEndpointIdIpsDto);
  }

  @Delete(':id')
  Destroy(@Param('id') id: string) {
    return this.PsEndpointIdIpsService.reqDestroy(id);
  }
}
