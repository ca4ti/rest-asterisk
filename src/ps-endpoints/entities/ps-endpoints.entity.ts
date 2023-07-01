import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  CalleridPrivacyE,
  ConditionsE,
  ConnectedLineMethodE,
  DirectMediaGlareMitigationE,
  DirectMediaMethodE,
  DtlsFingerprintE,
  DtlsSetupE,
  DtmfModeE,
  MediaEncryptionE,
  RedirectMethodE,
  Rel100E,
  T38UdptlEcE,
  TimersE,
  YesNoE,
} from '../enum/ps-endpoints.enum';

export type PsEndpointsDocument = PsEndpoints & Document;

@Schema()
export class PsEndpoints {

  @Prop()
  id: string;

  @Prop()
  transport: string;

  @Prop()
  aors: string;

  @Prop()
  auth: string;

  @Prop()
  context: string;

  @Prop()
  disallow: string;

  @Prop()
  allow: string;

  @Prop()
  transfer: string;

  @Prop()
  direct_media: YesNoE;

  @Prop()
  connected_line_method: ConnectedLineMethodE;

  @Prop()
  direct_media_method: DirectMediaMethodE;

  @Prop()
  direct_media_glare_mitigation: DirectMediaGlareMitigationE;

  @Prop()
  disable_direct_media_on_nat: YesNoE;

  @Prop()
  dtmf_mode: DtmfModeE;

  @Prop()
  external_media_address: string;

  @Prop()
  force_rport: YesNoE;

  @Prop()
  ice_support: YesNoE;

  @Prop()
  identify_by: string;

  @Prop()
  mailboxes: string;

  @Prop()
  moh_suggest: string;

  @Prop()
  outbound_auth: string;

  @Prop()
  outbound_proxy: string;

  @Prop()
  rewrite_contact: YesNoE;

  @Prop()
  rtp_ipv6: YesNoE;

  @Prop()
  rtp_symmetric: YesNoE;

  @Prop()
  send_diversion: YesNoE;

  @Prop()
  send_pai: YesNoE;

  @Prop()
  send_rpid: YesNoE;

  @Prop()
  timers_min_se: number;

  @Prop()
  timers: TimersE;

  @Prop()
  timers_sess_expires: number;

  @Prop()
  callerid: string;

  @Prop()
  callerid_privacy: CalleridPrivacyE;

  @Prop()
  callerid_tag: string;

  @Prop()
  rel100: Rel100E;

  @Prop()
  aggregate_mwi: YesNoE;

  @Prop()
  trust_id_inbound: YesNoE;

  @Prop()
  trust_id_outbound: YesNoE;

  @Prop()
  use_ptime: YesNoE;

  @Prop()
  use_avpf: YesNoE;

  @Prop()
  media_encryption: MediaEncryptionE;

  @Prop()
  inband_progress: YesNoE;

  @Prop()
  call_group: string;

  @Prop()
  pickup_group: string;

  @Prop()
  named_call_group: string;

  @Prop()
  named_pickup_group: string;

  @Prop()
  device_state_busy_at: number;

  @Prop()
  fax_detect: YesNoE;

  @Prop()
  t38_udptl: YesNoE;

  @Prop()
  t38_udptl_ec: T38UdptlEcE;

  @Prop()
  t38_udptl_maxdatagram: number;

  @Prop()
  t38_udptl_nat: YesNoE;

  @Prop()
  t38_udptl_ipv6: YesNoE;

  @Prop()
  tone_zone: string;

  @Prop()
  language: string;

  @Prop()
  one_touch_recording: YesNoE;

  @Prop()
  record_on_feature: string;

  @Prop()
  record_off_feature: string;

  @Prop()
  rtp_engine: string;

  @Prop()
  allow_transfer: YesNoE;

  @Prop()
  allow_subscribe: YesNoE;

  @Prop()
  sdp_owner: string;

  @Prop()
  sdp_session: string;

  @Prop()
  tos_audio: string;

  @Prop()
  tos_video: string;

  @Prop()
  sub_min_expiry: number;

  @Prop()
  from_domain: string;

  @Prop()
  from_user: string;

  @Prop()
  mwi_from_user: string;

  @Prop()
  dtls_verify: string;

  @Prop()
  dtls_rekey: string;

  @Prop()
  dtls_cert_file: string;

  @Prop()
  dtls_private_key: string;

  @Prop()
  dtls_cipher: string;

  @Prop()
  dtls_ca_file: string;

  @Prop()
  dtls_ca_path: string;

  @Prop()
  dtls_setup: DtlsSetupE;

  @Prop()
  srtp_tag_32: YesNoE;

  @Prop()
  media_address: string;

  @Prop()
  redirect_method: RedirectMethodE;

  @Prop()
  set_var: string;

  @Prop()
  cos_audio: number;

  @Prop()
  cos_video: number;

  @Prop()
  message_context: string;

  @Prop()
  force_avp: YesNoE;

  @Prop()
  media_use_received_transport: YesNoE;

  @Prop()
  accountcode: string;

  @Prop()
  media_encryption_optimistic: YesNoE;

  @Prop()
  user_eq_phone: YesNoE;

  @Prop()
  rpid_immediate: YesNoE;

  @Prop()
  g726_non_standard: YesNoE;

  @Prop()
  rtp_keepalive: number;

  @Prop()
  rtp_timeout: number;

  @Prop()
  rtp_timeout_hold: number;

  @Prop()
  bind_rtp_to_media_address: YesNoE;

  @Prop()
  voicemail_extension: string;

  @Prop()
  mwi_subscribe_replaces_unsolicited: ConditionsE;

  @Prop()
  deny: string;

  @Prop()
  permit: string;

  @Prop()
  acl: string;

  @Prop()
  contact_deny: string;

  @Prop()
  contact_permit: string;

  @Prop()
  contact_acl: string;

  @Prop()
  subscribe_context: string;

  @Prop()
  fax_detect_timeout: number;

  @Prop()
  contact_user: string;

  @Prop()
  asymmetric_rtp_codec: YesNoE;

  @Prop()
  rtcp_mux: YesNoE;

  @Prop()
  allow_overlap: YesNoE;

  @Prop()
  refer_blind_progress: YesNoE;

  @Prop()
  notify_early_inuse_ringing: YesNoE;

  @Prop()
  dtls_fingerprint: DtlsFingerprintE;

  @Prop()
  incoming_mwi_mailbox: string;

  @Prop()
  follow_early_media_fork: YesNoE;

  @Prop()
  accept_multiple_sdp_answers: YesNoE;

  @Prop()
  suppress_q850_reason_headers: YesNoE;

  @Prop()
  trust_connected_line: ConditionsE;

  @Prop()
  send_connected_line: ConditionsE;

  @Prop()
  ignore_183_without_sdp: ConditionsE;

  @Prop()
  moh_passthrough: YesNoE;

  @Prop()
  send_history_info: ConditionsE;

  @Prop()
  status: string;

  @Prop()
  "@CUSTOMERID": string;

  @Prop()
  "@USERID": string;

  @Prop()
  "@RAMAL": string;

  @Prop()
  "@NAME": string;
}

export const PsEndpointsSchema = SchemaFactory.createForClass(PsEndpoints);
