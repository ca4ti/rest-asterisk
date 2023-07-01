import { Module } from '@nestjs/common';
import { ExtensionsEmergencyService } from './extensions-emergency.service';
import { ExtensionsEmergencyController } from './extensions-emergency.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExtensionsEmergency, ExtensionsEmergencySchema } from './entities/extensions-emergency.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ExtensionsEmergency.name, schema: ExtensionsEmergencySchema },
    ]),
  ],
  controllers: [ExtensionsEmergencyController],
  providers: [ExtensionsEmergencyService],
})
export class ExtensionsEmergencyModule {}
