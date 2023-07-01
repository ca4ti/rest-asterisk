import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(ip): string {
    const IPV4 = ip.split(':');
    return 'PBX API Está Funcionando! Porta => 3000 (' + IPV4[3] + ')';
  }
}
