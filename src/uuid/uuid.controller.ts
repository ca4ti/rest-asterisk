import { Controller, Get } from '@nestjs/common';
import { UuidService } from './uuid.service';

@Controller('uuid')
export class UuidController {
  constructor(private readonly uuidService: UuidService) {}

  @Get()
  generate() {
    return this.uuidService.generate();
  }
}
