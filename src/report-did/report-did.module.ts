import { Module } from '@nestjs/common';
import { ReportDidService } from './report-did.service';
import { ReportDidController } from './report-did.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportDid, ReportDidSchema } from './entities/report-did.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReportDid.name, schema: ReportDidSchema },
    ]),
  ],
  controllers: [ReportDidController],
  providers: [ReportDidService],
})
export class ReportDidModule {}
