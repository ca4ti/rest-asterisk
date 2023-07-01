import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DidService } from './did.service';
import { CreateDidDto } from './dto/create-did.dto';
import { UpdateDidDto } from './dto/update-did.dto';
import { DidI } from './interfaces/did.intefaces';

@Controller('did')
export class DidController {
  constructor(private readonly didService: DidService) {}

  @Post('create')
  create(@Body() createDidDto: CreateDidDto) {
    return this.didService.create(createDidDto);
  }

  @Get()
  findAll() {
    return this.didService.findAll();
  }

  @Post('findBy')
  findOne(@Body() Did: DidI) {
    return this.didService.findOne(Did);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDidDto: UpdateDidDto) {
    return this.didService.update(id, updateDidDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.didService.remove(id);
  }
}
