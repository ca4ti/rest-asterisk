import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PsRegistrationsService } from './ps-registrations.service';
import { CreatePsRegistrationsDto } from './dto/create-ps-registrations.dto';
import { UpdatePsRegistrationsDto } from './dto/update-ps-registrations.dto';
import { PsRegistrationsI } from './interfaces/ps-registrations.interfaces';

@Controller('ps-registrations')
export class PsRegistrationsController {
  constructor(
    private readonly PsRegistrationsService: PsRegistrationsService,
  ) {}

  @Post('insert')
  create(@Body() createPsRegistrationsDto: CreatePsRegistrationsDto) {
    return this.PsRegistrationsService.create(createPsRegistrationsDto);
  }

  @Get()
  findAll() {
    return this.PsRegistrationsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsRegistrations: PsRegistrationsI) {
    return this.PsRegistrationsService.findOne(PsRegistrations);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePsRegistrationsDto: UpdatePsRegistrationsDto,
  ) {
    return this.PsRegistrationsService.update(id, updatePsRegistrationsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PsRegistrationsService.remove(id);
  }

  // --------------------------------------------------------------------

  @Post('store')
  Store(@Body() createPsRegistrationsDto: CreatePsRegistrationsDto) {
    return this.PsRegistrationsService.reqStore(createPsRegistrationsDto);
  }

  @Post('multi')
  Multi() {
    return this.PsRegistrationsService.reqMulti();
  }

  @Post('single')
  Single(@Body() PsRegistrations: PsRegistrationsI) {
    return this.PsRegistrationsService.reqSingle(PsRegistrations);
  }

  @Post('update')
  Update(
    @Param('id') id: string,
    @Body() updatePsRegistrationsDto: UpdatePsRegistrationsDto,
  ) {
    return this.PsRegistrationsService.reqUpdate(id, updatePsRegistrationsDto);
  }

  @Post('destroy')
  Destroy(@Param('id') id: string) {
    return this.PsRegistrationsService.reqDestroy(id);
  }


}
