import { PartialType } from '@nestjs/mapped-types';
import { CreateQueueAstDto } from './create-queue-ast.dto';

export class UpdateQueueAstDto extends PartialType(CreateQueueAstDto) {}
