import { Module } from '@nestjs/common';
import { ExtensionsService } from './extensions.service';
import { ExtensionsController } from './extensions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Extensions, ExtensionsSchema } from './entities/extensions.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Extensions.name, schema: ExtensionsSchema },
    ]),
  ],
  controllers: [ExtensionsController],
  providers: [ExtensionsService],
})
export class ExtensionsModule {}
