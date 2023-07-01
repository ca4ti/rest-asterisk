import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';

@Injectable()
export class UuidService {
  generate() {
    const Json = {
      id: uuid(),
    };

    return Json;
  }

  generateShort() {
      let s4 = () => {
          return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
      }
      return s4() + s4() + s4();
  }

}
