import { Module } from '@nestjs/common';
import { PsRamalService } from './ps-ramal.service';
import { PsRamalController } from './ps-ramal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PsRamal, PsRamalSchema } from './entities/ps-ramal.entity';
import { PsAorsModule } from 'src/ps-aors/ps-aors.module';
import { PsAuthsModule } from 'src/ps-auths/ps-auths.module';
import { PsEndpointsModule } from 'src/ps-endpoints/ps-endpoints.module';
import { PsRegistrationsModule } from 'src/ps-registrations/ps-registrations.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsRamal.name, schema: PsRamalSchema },
    ]),
    PsAorsModule,
    PsAuthsModule,
    PsEndpointsModule,
    PsRegistrationsModule,
  ],
  controllers: [PsRamalController],
  providers: [PsRamalService],
})
export class PsRamalModule {}
