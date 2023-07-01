import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RealIP } from 'nestjs-real-ip';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@RealIP() ip: string): string {
    return this.appService.getHello(ip);
  }
}
