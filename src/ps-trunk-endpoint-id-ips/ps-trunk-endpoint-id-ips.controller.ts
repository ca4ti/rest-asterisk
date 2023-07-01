import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PsTrunkEndpointIdIpsService } from './ps-trunk-endpoint-id-ips.service';
import { CreatePsTrunkEndpointIdIpsDto } from './dto/create-ps-trunk-endpoint-id-ips.dto';
import { UpdatePsTrunkEndpointIdIpsDto } from './dto/update-ps-trunk-endpoint-id-ips.dto';
import { PsTrunkEndpointIdIpsI } from './interfaces/ps-trunk-endpoint-id-ips.interfaces';

@Controller('ps-trunk-endpoint-id-ips')
export class PsTrunkEndpointIdIpsController {
  constructor(
    private readonly PsTrunkEndpointIdIpsService: PsTrunkEndpointIdIpsService,
  ) {}

  @Post('insert')
  create(@Body() createPsTrunkEndpointIdIpsDto: CreatePsTrunkEndpointIdIpsDto) {
    return this.PsTrunkEndpointIdIpsService.create(createPsTrunkEndpointIdIpsDto);
  }

  @Get()
  findAll() {
    return this.PsTrunkEndpointIdIpsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsTrunkEndpointIdIps: PsTrunkEndpointIdIpsI) {
    return this.PsTrunkEndpointIdIpsService.findOne(PsTrunkEndpointIdIps);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePsTrunkEndpointIdIpsDto: UpdatePsTrunkEndpointIdIpsDto,
  ) {
    return this.PsTrunkEndpointIdIpsService.update(id, updatePsTrunkEndpointIdIpsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PsTrunkEndpointIdIpsService.remove(id);
  }

  // -------------------------------------------------------------------

  @Post('store')
  Store(@Body() createPsTrunkEndpointIdIpsDto: CreatePsTrunkEndpointIdIpsDto) {
    return this.PsTrunkEndpointIdIpsService.reqStore(createPsTrunkEndpointIdIpsDto);
  }

  @Post('multi')
  Multi(@Body() data: any) {
    return this.PsTrunkEndpointIdIpsService.reqMulti(data);
  }

  @Post('single')
  Single(@Body() PsTrunkEndpointIdIps: PsTrunkEndpointIdIpsI) {
    return this.PsTrunkEndpointIdIpsService.reqSingle(PsTrunkEndpointIdIps);
  }

  @Patch(':id')
  Update(
    @Param('id') id: string,
    @Body() updatePsTrunkEndpointIdIpsDto: UpdatePsTrunkEndpointIdIpsDto,
  ) {
    return this.PsTrunkEndpointIdIpsService.reqUpdate(id, updatePsTrunkEndpointIdIpsDto);
  }

  @Delete(':id')
  Destroy(@Param('id') id: string) {
    return this.PsTrunkEndpointIdIpsService.reqDestroy(id);
  }
}
