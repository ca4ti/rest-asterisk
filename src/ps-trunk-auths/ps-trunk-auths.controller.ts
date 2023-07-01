import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PsTrunkAuthsService } from './ps-trunk-auths.service';
import { CreatePsTrunkAuthsDto } from './dto/create-ps-trunk-auths.dto';
import { UpdatePsTrunkAuthsDto } from './dto/update-ps-trunk-auths.dto';
import { PsTrunkAuthsI } from './interfaces/ps-trunk-auths.interfaces';

@Controller('ps-trunk-auths')
export class PsTrunkAuthsController {
  constructor(private readonly PsTrunkAuthsService: PsTrunkAuthsService) {}

  @Post('insert')
  create(@Body() createPsTrunkAuthsDto: CreatePsTrunkAuthsDto) {
    return this.PsTrunkAuthsService.create(createPsTrunkAuthsDto);
  }

  @Get()
  findAll() {
    return this.PsTrunkAuthsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsTrunkAuths: PsTrunkAuthsI) {
    return this.PsTrunkAuthsService.findOne(PsTrunkAuths);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsTrunkAuthsDto: UpdatePsTrunkAuthsDto) {
    return this.PsTrunkAuthsService.update(id, updatePsTrunkAuthsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.PsTrunkAuthsService.remove(id);
  }


  // --------------------------------------------------


  @Post('store')
  Store(@Body() createPsTrunkAuthsDto: CreatePsTrunkAuthsDto) {
    return this.PsTrunkAuthsService.create(createPsTrunkAuthsDto);
  }

  @Post('multi')
  Multi() {
    return this.PsTrunkAuthsService.reqMulti();
  }

  @Post('single')
  Single(@Body() PsTrunkAuths: PsTrunkAuthsI) {
    return this.PsTrunkAuthsService.reqSingle(PsTrunkAuths);
  }

  @Post('update')
  Update(@Param('id') id: string, @Body() updatePsTrunkAuthsDto: UpdatePsTrunkAuthsDto) {
    return this.PsTrunkAuthsService.reqUpdate(id, updatePsTrunkAuthsDto);
  }

  @Post('destroy')
  Destroy(@Param('id') id: string) {
    return this.PsTrunkAuthsService.reqDestroy(id);
  }

}
