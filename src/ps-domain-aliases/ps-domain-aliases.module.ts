import { Module } from '@nestjs/common';
import { PsDomainAliasesService } from './ps-domain-aliases.service';
import { PsDomainAliasesController } from './ps-domain-aliases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PsDomainAliases,
  PsDomainAliasesSchema,
} from './entities/ps-domain-aliases.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsDomainAliases.name, schema: PsDomainAliasesSchema },
    ]),
  ],
  controllers: [PsDomainAliasesController],
  providers: [PsDomainAliasesService],
})
export class PsDomainAliasesModule {}
