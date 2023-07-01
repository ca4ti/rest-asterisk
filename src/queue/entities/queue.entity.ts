import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  AnnounceToFirstUserE,
  AutoFillE,
  AutoPauseBusyE,
  AutoPauseE,
  AutoPauseUnavailE,
  RandomPeriodicAnnounceE,
  RelativePeriodicAnnounceE,
  ReportHoldTimeE,
  RinginUseE,
  SetInterfaceVarE,
  SetQueueEntryVarE,
  SetQueueVarE,
  StrategyE,
  TimeoutRestartE,
} from '../enum/queue.enum';

export type QueueDocument = Queue & Document;

@Schema()
export class Queue {
  @Prop()
  type: string;

  @Prop()
  name: string;

  @Prop()
  musiconhold: string;

  @Prop()
  announce: string;

  @Prop()
  context: string;

  @Prop()
  timeout: number;

  @Prop()
  ringinuse: RinginUseE;

  @Prop()
  setinterfacevar: SetInterfaceVarE;

  @Prop()
  setqueuevar: SetQueueVarE;

  @Prop()
  setqueueentryvar: SetQueueEntryVarE;

  @Prop()
  monitor_format: string;

  @Prop()
  membermacro: string;

  @Prop()
  membergosub: string;

  @Prop()
  queue_youarenext: string;

  @Prop()
  queue_thereare: string;

  @Prop()
  queue_callswaiting: string;

  @Prop()
  queue_quantity1: string;

  @Prop()
  queue_quantity2: string;

  @Prop()
  queue_holdtime: string;

  @Prop()
  queue_minutes: string;

  @Prop()
  queue_minute: string;

  @Prop()
  queue_seconds: string;

  @Prop()
  queue_thankyou: string;

  @Prop()
  queue_callerannounce: string;

  @Prop()
  queue_reporthold: string;

  @Prop()
  announce_frequency: number;

  @Prop()
  announce_to_first_user: AnnounceToFirstUserE;

  @Prop()
  min_announce_frequency: number;

  @Prop()
  announce_round_seconds: number;

  @Prop()
  announce_holdtime: string;

  @Prop()
  announce_position: string;

  @Prop()
  announce_position_limit: number;

  @Prop()
  periodic_announce: string;

  @Prop()
  periodic_announce_frequency: number;

  @Prop()
  relative_periodic_announce: RelativePeriodicAnnounceE;

  @Prop()
  random_periodic_announce: RandomPeriodicAnnounceE;

  @Prop()
  retry: number;

  @Prop()
  wrapuptime: number;

  @Prop()
  penaltymemberslimit: number;

  @Prop()
  autofill: AutoFillE;

  @Prop()
  monitor_type: string;

  @Prop()
  autopause: AutoPauseE;

  @Prop()
  autopausedelay: number;

  @Prop()
  autopausebusy: AutoPauseBusyE;

  @Prop()
  autopauseunavail: AutoPauseUnavailE;

  @Prop()
  maxlen: number;

  @Prop()
  servicelevel: number;

  @Prop()
  strategy: StrategyE;

  @Prop()
  joinempty: string;

  @Prop()
  leavewhenempty: string;

  @Prop()
  reportholdtime: ReportHoldTimeE;

  @Prop()
  memberdelay: number;

  @Prop()
  weight: number;

  @Prop()
  timeoutrestart: TimeoutRestartE;

  @Prop()
  defaultrule: string;

  @Prop()
  timeoutpriority: string;

  @Prop()
  status: string;

  @Prop()
  customerId: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const QueueSchema = SchemaFactory.createForClass(Queue);
