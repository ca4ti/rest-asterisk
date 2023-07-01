import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PsTrunkDomainAliasesService } from './ps-trunk-domain-aliases.service';
import { CreatePsTrunkDomainAliasesDto } from './dto/create-ps-trunk-domain-aliases.dto';
import { UpdatePsTrunkDomainAliasesDto } from './dto/update-ps-trunk-domain-aliases.dto';
import { PsTrunkDomainAliasesI } from './interfaces/ps-trunk-domain-aliases.interfaces';

@Controller('ps-trunk-domain-aliases')
export class PsTrunkDomainAliasesController {
  constructor(
    private readonly PsTrunkDomainAliasesService: PsTrunkDomainAliasesService,
  ) {}

  @Post('insert')
  create(@Body() createPsTrunkDomainAliasesDto: CreatePsTrunkDomainAliasesDto) {
    return this.PsTrunkDomainAliasesService.create(createPsTrunkDomainAliasesDto);
  }

  @Get()
  findAll() {
    return this.PsTrunkDomainAliasesService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsTrunkDomainAliases: PsTrunkDomainAliasesI) {
    return this.PsTrunkDomainAliasesService.findOne(PsTrunkDomainAliases);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePsTrunkDomainAliasesDto: UpdatePsTrunkDomainAliasesDto,
  ) {
    return this.PsTrunkDomainAliasesService.update(id, updatePsTrunkDomainAliasesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PsTrunkDomainAliasesService.remove(id);
  }


  // ------------------------------------------------------------------


  @Post('store')
  Store(@Body() createPsTrunkDomainAliasesDto: CreatePsTrunkDomainAliasesDto) {
    return this.PsTrunkDomainAliasesService.reqStore(createPsTrunkDomainAliasesDto);
  }

  @Post('multi')
  Multi() {
    return this.PsTrunkDomainAliasesService.reqMulti();
  }

  @Post('single')
  Single(@Body() PsTrunkDomainAliases: PsTrunkDomainAliasesI) {
    return this.PsTrunkDomainAliasesService.reqSingle(PsTrunkDomainAliases);
  }

  @Post('update')
  Update(
    @Param('id') id: string,
    @Body() updatePsTrunkDomainAliasesDto: UpdatePsTrunkDomainAliasesDto,
  ) {
    return this.PsTrunkDomainAliasesService.reqUpdate(id, updatePsTrunkDomainAliasesDto);
  }

  @Post('destroy')
  Destroy(@Param('id') id: string) {
    return this.PsTrunkDomainAliasesService.reqDestroy(id);
  }

}
