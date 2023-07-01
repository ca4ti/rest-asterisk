import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PsTrunkRegistrationsService } from './ps-trunk-registrations.service';
import { CreatePsTrunkRegistrationsDto } from './dto/create-ps-trunk-registrations.dto';
import { UpdatePsTrunkRegistrationsDto } from './dto/update-ps-trunk-registrations.dto';
import { PsTrunkRegistrationsI } from './interfaces/ps-trunk-registrations.interfaces';

@Controller('ps-trunk-registrations')
export class PsTrunkRegistrationsController {
  constructor(
    private readonly PsTrunkRegistrationsService: PsTrunkRegistrationsService,
  ) {}

  @Post('insert')
  create(@Body() createPsTrunkRegistrationsDto: CreatePsTrunkRegistrationsDto) {
    return this.PsTrunkRegistrationsService.create(createPsTrunkRegistrationsDto);
  }

  @Get()
  findAll() {
    return this.PsTrunkRegistrationsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsTrunkRegistrations: PsTrunkRegistrationsI) {
    return this.PsTrunkRegistrationsService.findOne(PsTrunkRegistrations);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePsTrunkRegistrationsDto: UpdatePsTrunkRegistrationsDto,
  ) {
    return this.PsTrunkRegistrationsService.update(id, updatePsTrunkRegistrationsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.PsTrunkRegistrationsService.remove(id);
  }

  // --------------------------------------------------------------------

  @Post('store')
  Store(@Body() createPsTrunkRegistrationsDto: CreatePsTrunkRegistrationsDto) {
    return this.PsTrunkRegistrationsService.reqStore(createPsTrunkRegistrationsDto);
  }

  @Post('multi')
  Multi() {
    return this.PsTrunkRegistrationsService.reqMulti();
  }

  @Post('single')
  Single(@Body() PsTrunkRegistrations: PsTrunkRegistrationsI) {
    return this.PsTrunkRegistrationsService.reqSingle(PsTrunkRegistrations);
  }

  @Post('update')
  Update(
    @Param('id') id: string,
    @Body() updatePsTrunkRegistrationsDto: UpdatePsTrunkRegistrationsDto,
  ) {
    return this.PsTrunkRegistrationsService.reqUpdate(id, updatePsTrunkRegistrationsDto);
  }

  @Post('destroy')
  Destroy(@Param('id') id: string) {
    return this.PsTrunkRegistrationsService.reqDestroy(id);
  }


}
