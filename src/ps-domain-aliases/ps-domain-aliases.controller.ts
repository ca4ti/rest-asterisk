import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PsDomainAliasesService } from './ps-domain-aliases.service';
import { CreatePsDomainAliasesDto } from './dto/create-ps-domain-aliases.dto';
import { UpdatePsDomainAliasesDto } from './dto/update-ps-domain-aliases.dto';
import { PsDomainAliasesI } from './interfaces/ps-domain-aliases.interfaces';

@Controller('ps-domain-aliases')
export class PsDomainAliasesController {
  constructor(
    private readonly PsDomainAliasesService: PsDomainAliasesService,
  ) {}

  @Post('insert')
  create(@Body() createPsDomainAliasesDto: CreatePsDomainAliasesDto) {
    return this.PsDomainAliasesService.create(createPsDomainAliasesDto);
  }

  @Get()
  findAll() {
    return this.PsDomainAliasesService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsDomainAliases: PsDomainAliasesI) {
    return this.PsDomainAliasesService.findOne(PsDomainAliases);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePsDomainAliasesDto: UpdatePsDomainAliasesDto,
  ) {
    return this.PsDomainAliasesService.update(id, updatePsDomainAliasesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PsDomainAliasesService.remove(id);
  }


  // ------------------------------------------------------------------


  @Post('store')
  Store(@Body() createPsDomainAliasesDto: CreatePsDomainAliasesDto) {
    return this.PsDomainAliasesService.reqStore(createPsDomainAliasesDto);
  }

  @Post('multi')
  Multi() {
    return this.PsDomainAliasesService.reqMulti();
  }

  @Post('single')
  Single(@Body() PsDomainAliases: PsDomainAliasesI) {
    return this.PsDomainAliasesService.reqSingle(PsDomainAliases);
  }

  @Post('update')
  Update(
    @Param('id') id: string,
    @Body() updatePsDomainAliasesDto: UpdatePsDomainAliasesDto,
  ) {
    return this.PsDomainAliasesService.reqUpdate(id, updatePsDomainAliasesDto);
  }

  @Post('destroy')
  Destroy(@Param('id') id: string) {
    return this.PsDomainAliasesService.reqDestroy(id);
  }

}
