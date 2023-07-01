import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RamalWhisperService } from './ramal-whisper.service';
import { RamalWhisperController } from './ramal-whisper.controller';
import { RamalWhisper, RamalWhisperSchema } from './entities/ramal-whisper.entity';
import { PsEndpointsModule } from 'src/ps-endpoints/ps-endpoints.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RamalWhisper.name, schema: RamalWhisperSchema },
    ]),
    PsEndpointsModule,
  ],
  controllers: [RamalWhisperController],
  providers: [RamalWhisperService]
})
export class RamalWhisperModule {}
