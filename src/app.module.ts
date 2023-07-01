import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnnouncementModule } from './announcement/announcement.module';
import { IvrModule } from './ivr/ivr.module';
import { HangupModule } from './hangup/hangup.module';
import { QueueModule } from './queue/queue.module';
import { UuidModule } from './uuid/uuid.module';
import { TimeGroupModule } from './time-group/time-group.module';
import { MongooseModule } from '@nestjs/mongoose';

import { DidModule } from './did/did.module';
import { CallcenterModule } from './callcenter/callcenter.module';
import { ExtensionsModule } from './extensions/extensions.module';
import { ExtensionsEmergencyModule } from './extensions-emergency/extensions-emergency.module';

import { LogQueueModule } from './log-queue/log-queue.module';

import { TransferAssistedModule } from './transfer-assisted/transfer-assisted.module';
import { TransferDirectModule } from './transfer-direct/transfer-direct.module';

import { ReportQueueModule } from './report-queue/report-queue.module';
import { ReportAnnouncementModule } from './report-announcement/report-announcement.module';
import { ReportDidModule } from './report-did/report-did.module';
import { ReportCallcenterModule } from './report-callcenter/report-callcenter.module';
import { ReportExtensionsModule } from './report-extensions/report-extensions.module';
import { ReportExtensionsEmergencyModule } from './report-extensions-emergency/report-extensions-emergency.module';
import { ReportTrunkModule } from './report-trunk/report-trunk.module';
import { ReportHangupModule } from './report-hangup/report-hangup.module';
import { ReportIvrModule } from './report-ivr/report-ivr.module';
import { ReportTimeGroupModule } from './report-time-group/report-time-group.module';

import { QueueRulesModule } from './queue-rules/queue-rules.module';
import { QueueMembersModule } from './queue-members/queue-members.module';
import { QueueAstModule } from './queue-ast/queue-ast.module';

import { RamalGetModule } from './ramal-get/ramal-get.module';
import { RamalListenModule } from './ramal-listen/ramal-listen.module';
import { RamalWhisperModule } from './ramal-whisper/ramal-whisper.module';

import { PsRamalModule } from './ps-ramal/ps-ramal.module';
import { PsAorsModule } from './ps-aors/ps-aors.module';
import { PsAuthsModule } from './ps-auths/ps-auths.module';
import { PsContactsModule } from './ps-contacts/ps-contacts.module';
import { PsDomainAliasesModule } from './ps-domain-aliases/ps-domain-aliases.module';
import { PsEndpointIdIpsModule } from './ps-endpoint-id-ips/ps-endpoint-id-ips.module';
import { PsEndpointsModule } from './ps-endpoints/ps-endpoints.module';
import { PsRegistrationsModule } from './ps-registrations/ps-registrations.module';

import { PsTrunkModule } from './ps-trunk/ps-trunk.module';
import { PsTrunkAorsModule } from './ps-trunk-aors/ps-trunk-aors.module';
import { PsTrunkAuthsModule } from './ps-trunk-auths/ps-trunk-auths.module';
import { PsTrunkContactsModule } from './ps-trunk-contacts/ps-trunk-contacts.module';
import { PsTrunkDomainAliasesModule } from './ps-trunk-domain-aliases/ps-trunk-domain-aliases.module';
import { PsTrunkEndpointIdIpsModule } from './ps-trunk-endpoint-id-ips/ps-trunk-endpoint-id-ips.module';
import { PsTrunkEndpointsModule } from './ps-trunk-endpoints/ps-trunk-endpoints.module';
import { PsTrunkRegistrationsModule } from './ps-trunk-registrations/ps-trunk-registrations.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://userdev:8baJZ4AmteR3kpTT@45.4.78.205',
    ),
    RamalGetModule,
    RamalListenModule,
    RamalWhisperModule,
    AnnouncementModule,
    IvrModule,
    HangupModule,
    QueueModule,
    QueueAstModule,
    QueueRulesModule,
    QueueMembersModule,
    PsRamalModule,
    PsAorsModule,
    PsAuthsModule,
    PsContactsModule,
    PsDomainAliasesModule,
    PsEndpointIdIpsModule,
    PsEndpointsModule,
    PsRegistrationsModule,
    PsTrunkModule,
    PsTrunkAorsModule,
    PsTrunkAuthsModule,
    PsTrunkContactsModule,
    PsTrunkDomainAliasesModule,
    PsTrunkEndpointIdIpsModule,
    PsTrunkEndpointsModule,
    PsTrunkRegistrationsModule,
    DidModule,
    UuidModule,
    TimeGroupModule,
    CallcenterModule,
    ExtensionsModule,
    ExtensionsEmergencyModule,
    ReportQueueModule,
    ReportAnnouncementModule,
    ReportCallcenterModule,
    ReportExtensionsModule,
    ReportExtensionsEmergencyModule,
    ReportHangupModule,
    ReportIvrModule,
    ReportTimeGroupModule,
    ReportDidModule,
    ReportTrunkModule,
    LogQueueModule,
    TransferAssistedModule,
    TransferDirectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
