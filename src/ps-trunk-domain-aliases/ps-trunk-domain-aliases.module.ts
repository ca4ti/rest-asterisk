import { Module } from '@nestjs/common';
import { PsTrunkDomainAliasesService } from './ps-trunk-domain-aliases.service';
import { PsTrunkDomainAliasesController } from './ps-trunk-domain-aliases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PsTrunkDomainAliases,
  PsTrunkDomainAliasesSchema,
} from './entities/ps-trunk-domain-aliases.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PsTrunkDomainAliases.name, schema: PsTrunkDomainAliasesSchema },
    ]),
  ],
  controllers: [PsTrunkDomainAliasesController],
  providers: [PsTrunkDomainAliasesService],
})
export class PsTrunkDomainAliasesModule {}
