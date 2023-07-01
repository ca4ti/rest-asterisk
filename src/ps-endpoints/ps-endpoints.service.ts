import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsEndpointsDto } from './dto/create-ps-endpoints.dto';
import { UpdatePsEndpointsDto } from './dto/update-ps-endpoints.dto';
import {
  PsEndpoints,
  PsEndpointsDocument,
} from './entities/ps-endpoints.entity';
import { PsEndpointsI } from './interfaces/ps-endpoints.interfaces';

@Injectable()
export class PsEndpointsService {
  constructor(
    @InjectModel(PsEndpoints.name)
    private PsEndpointsModel: Model<PsEndpointsDocument>,
  ) {}

  create(
    createPsEndpointsDto: CreatePsEndpointsDto,
  ): Promise<PsEndpoints> {
    const getData = new this.PsEndpointsModel(createPsEndpointsDto);
    const getFormatDate = new Date().toISOString();
    const includeData = {
      transport: "",
      disallow: "all",
      allow: "alaw, vp8",
      direct_media: "no",
      connected_line_method: "",
      direct_media_method: "invite",
      direct_media_glare_mitigation: "outgoing",
      disable_direct_media_on_nat: "no",
      dtmf_mode: "rfc4733",
      external_media_address: "",
      force_rport: "yes",
      ice_support: "no",
      identify_by: "",
      mailboxes: "",
      moh_suggest: "",
      outbound_auth: "",
      outbound_proxy: "",
      rewrite_contact: "no",
      rtp_ipv6: "no",
      rtp_symmetric: "no",
      send_diversion: "no",
      send_pai: "no",
      send_rpid: "no",
      timers_min_se: 90,
      timers: "no",
      timers_sess_expires: 90,
      callerid: "",
      callerid_privacy: "allowed",
      callerid_tag: "",
      "100rel": "no",
      aggregate_mwi: "no",
      trust_id_inbound: "no",
      trust_id_outbound: "no",
      use_ptime: "no",
      use_avpf: "no",
      media_encryption: "no",
      inband_progress: "no",
      call_group: "",
      pickup_group: "",
      named_call_group: "",
      named_pickup_group: "",
      device_state_busy_at: 0,
      fax_detect: "no",
      t38_udptl: "no",
      t38_udptl_ec: "none",
      t38_udptl_maxdatagram: 0,
      t38_udptl_nat: "no",
      t38_udptl_ipv6: "no",
      tone_zone: "",
      language: "",
      one_touch_recording: "no",
      record_on_feature: "",
      record_off_feature: "",
      rtp_engine: "",
      allow_transfer: "yes",
      allow_subscribe: "yes",
      sdp_owner: "",
      sdp_session: "",
      tos_audio: 0,
      tos_video: 0,
      sub_min_expiry: 0,
      from_domain: "",
      from_user: "",
      mwi_from_user: "",
      dtls_verify: "",
      dtls_rekey: "",
      dtls_cert_file: "",
      dtls_private_key: "",
      dtls_cipher: "",
      dtls_ca_file: "",
      dtls_ca_path: "",
      dtls_setup: "passive",
      srtp_tag_32: "yes",
      media_address: "",
      redirect_method: "user",
      set_var: "",
      cos_audio: 0,
      cos_video: 0,
      message_context: "",
      force_avp: "no",
      media_use_received_transport: "no",
      accountcode: "1",
      media_encryption_optimistic: "no",
      user_eq_phone: "no",
      rpid_immediate: "no",
      g726_non_standard: "no",
      rtp_keepalive: 1,
      rtp_timeout: 1,
      rtp_timeout_hold: 1,
      bind_rtp_to_media_address: "yes",
      voicemail_extension: "",
      mwi_subscribe_replaces_unsolicited: "no",
      deny: "",
      permit: "",
      acl: "",
      contact_deny: "",
      contact_permit: "",
      contact_acl: "",
      subscribe_context: "",
      fax_detect_timeout: 0,
      contact_user: "",
      asymmetric_rtp_codec: "no",
      rtcp_mux: "no",
      allow_overlap: "no",
      refer_blind_progress: "no",
      notify_early_inuse_ringing: "no",
      dtls_fingerprint: "SHA-1",
      incoming_mwi_mailbox: "",
      follow_early_media_fork: "no",
      accept_multiple_sdp_answers: "no",
      suppress_q850_reason_headers: "no",
      trust_connected_line: "no",
      send_connected_line: "no",
      ignore_183_without_sdp: "no",
      moh_passthrough: "no",
      send_history_info: "no",
      transfer: 'true',
      status: 'active',
      createdAt: getFormatDate,
      updatedAt: getFormatDate
    };
    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  findAll() {
    return this.PsEndpointsModel.find();
  }

  findOne(PsEndpoints: PsEndpointsI) {
    console.log(PsEndpoints);
    return this.PsEndpointsModel.findOne(PsEndpoints);
  }

  update(_id: string, _updatePsEndpointsDto: UpdatePsEndpointsDto) {
    return this.PsEndpointsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsEndpointsDto },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.PsEndpointsModel.deleteOne({ _id });
  }

  // ---------------------------------------------------------

  async reqStore(
    createPsEndpointsDto: CreatePsEndpointsDto,
  ): Promise<PsEndpoints> {
    const getData = new this.PsEndpointsModel(createPsEndpointsDto);
    const getFormatDate = new Date().toISOString();
    const includeData = {
      transfer: 'true',
      createdAt: getFormatDate,
      updatedAt: getFormatDate,
      status: 'active',
      customerId: '62e3e63f6dda97d36f667166',
    };
    const insertData = Object.assign(getData, includeData);
    return insertData.save();
  }

  async reqMulti() {
    const data = this.PsEndpointsModel.find();
    const dados = [];

    for (const elemento of await data) {
      dados.push('id=' + elemento.id);
    }

    const convert = JSON.stringify(dados);

    return convert
      .replace(/["|{}|\[\]]/g, '')
      .replace(/[:]/g, '=')
      .replace(/[,]/g, '\n');
  }

  async reqSingle(req) {
    console.log(req);
    
    const data  = await this.PsEndpointsModel.findOne(req);
    const dados = [];

    if(data){
      dados.push(
        "id=" + data.id + 
        "&transport=" + data.transport + 
        "&aors=" + data.aors + 
        "&auth=" + data.auth + 
        "&context=" + data.context + 
        "&allow=" + data.allow +
        "&direct_media=" + data.direct_media +
        "&connected_line_method=" + data.connected_line_method +
        "&direct_media_method=" + data.direct_media_method +
        "&direct_media_glare_mitigation=" + data.direct_media_glare_mitigation +
        "&disable_direct_media_on_nat=" + data.disable_direct_media_on_nat +
        "&dtmf_mode=" + data.dtmf_mode +
        "&external_media_address=" + data.external_media_address +
        "&force_rport=" + data.force_rport +
        "&ice_support=" + data.ice_support +
        "&identify_by=" + data.identify_by +
        "&mailboxes=" + data.mailboxes +
        "&moh_suggest=" + data.moh_suggest +
        "&outbound_auth=" + data.outbound_auth +
        "&outbound_proxy=" + data.outbound_proxy +
        "&rewrite_contact=" + data.rewrite_contact +
        "&rtp_ipv6=" + data.rtp_ipv6 +
        "&rtp_symmetric=" + data.rtp_symmetric +
        "&send_diversion=" + data.send_diversion +
        "&send_pai=" + data.send_pai +
        "&send_rpid=" + data.send_rpid +
        "&timers_min_se=" + data.timers_min_se +
        "&timers=" + data.timers +
        "&timers_sess_expires=" + data.timers_sess_expires +
        "&callerid=" + data.callerid +
        "&callerid_privacy=" + data.callerid_privacy +
        "&callerid_tag=" + data.callerid_tag +
        "&aggregate_mwi=" + data.aggregate_mwi +
        "&trust_id_inbound=" + data.trust_id_inbound +
        "&trust_id_outbound=" + data.trust_id_outbound +
        "&use_ptime=" + data.use_ptime +
        "&use_avpf=" + data.use_avpf +
        "&media_encryption=" + data.media_encryption +
        "&inband_progress=" + data.inband_progress +
        "&call_group=" + data.call_group +
        "&pickup_group=" + data.pickup_group +
        "&named_call_group=" + data.named_call_group +
        "&named_pickup_group=" + data.named_pickup_group +
        "&device_state_busy_at=" + data.device_state_busy_at +
        "&fax_detect=" + data.fax_detect +
        "&t38_udptl=" + data.t38_udptl +
        "&t38_udptl_ec=" + data.t38_udptl_ec +
        "&t38_udptl_maxdatagram=" + data.t38_udptl_maxdatagram +
        "&t38_udptl_nat=" + data.t38_udptl_nat +
        "&t38_udptl_ipv6=" + data.t38_udptl_ipv6 +
        "&tone_zone=" + data.tone_zone +
        "&language=" + data.language +
        "&one_touch_recording=" + data.one_touch_recording +
        "&record_on_feature=" + data.record_on_feature +
        "&record_off_feature=" + data.record_off_feature +
        "&rtp_engine=" + data.rtp_engine +
        "&allow_transfer=" + data.allow_transfer +
        "&allow_subscribe=" + data.allow_subscribe +
        "&sdp_owner=" + data.sdp_owner +
        "&sdp_session=" + data.sdp_session +
        "&tos_audio=" + data.tos_audio +
        "&tos_video=" + data.tos_video +
        "&sub_min_expiry=" + data.sub_min_expiry +
        "&from_domain=" + data.from_domain +
        "&from_user=" + data.from_user +
        "&mwi_from_user=" + data.mwi_from_user +
        "&dtls_verify=" + data.dtls_verify +
        "&dtls_rekey=" + data.dtls_rekey +
        "&dtls_cert_file=" + data.dtls_cert_file +
        "&dtls_private_key=" + data.dtls_private_key +
        "&dtls_cipher=" + data.dtls_cipher +
        "&dtls_ca_file=" + data.dtls_ca_file +
        "&dtls_ca_path=" + data.dtls_ca_path +
        "&dtls_setup=" + data.dtls_setup +
        "&srtp_tag_32=" + data.srtp_tag_32 +
        "&media_address=" + data.media_address +
        "&redirect_method=" + data.redirect_method +
        "&set_var=" + data.set_var +
        "&cos_audio=" + data.cos_audio +
        "&cos_video=" + data.cos_video +
        "&message_context=" + data.message_context +
        "&force_avp=" + data.force_avp +
        "&media_use_received_transport=" + data.media_use_received_transport +
        "&accountcode=" + data.accountcode +
        "&media_encryption_optimistic=" + data.media_encryption_optimistic +
        "&user_eq_phone=" + data.user_eq_phone +
        "&rpid_immediate=" + data.rpid_immediate +
        "&g726_non_standard=" + data.g726_non_standard +
        "&rtp_keepalive=" + data.rtp_keepalive +
        "&rtp_timeout=" + data.rtp_timeout +
        "&rtp_timeout_hold=" + data.rtp_timeout_hold +
        "&bind_rtp_to_media_address=" + data.bind_rtp_to_media_address +
        "&voicemail_extension=" + data.voicemail_extension +
        "&mwi_subscribe_replaces_unsolicited=" + data.mwi_subscribe_replaces_unsolicited +
        "&deny=" + data.deny +
        "&permit=" + data.permit +
        "&acl=" + data.acl +
        "&contact_deny=" + data.contact_deny +
        "&contact_permit=" + data.contact_permit +
        "&contact_acl=" + data.contact_acl +
        "&subscribe_context=" + data.subscribe_context +
        "&fax_detect_timeout=" + data.fax_detect_timeout +
        "&contact_user=" + data.contact_user +
        "&asymmetric_rtp_codec=" + data.asymmetric_rtp_codec +
        "&rtcp_mux=" + data.rtcp_mux +
        "&allow_overlap=" + data.allow_overlap +
        "&refer_blind_progress=" + data.refer_blind_progress +
        "&notify_early_inuse_ringing=" + data.notify_early_inuse_ringing +
        "&dtls_fingerprint=" + data.dtls_fingerprint +
        "&incoming_mwi_mailbox=" + data.incoming_mwi_mailbox +
        "&follow_early_media_fork=" + data.follow_early_media_fork +
        "&accept_multiple_sdp_answers=" + data.accept_multiple_sdp_answers +
        "&suppress_q850_reason_headers=" + data.suppress_q850_reason_headers +
        "&trust_connected_line=" + data.trust_connected_line +
        "&send_connected_line=" + data.send_connected_line +
        "&ignore_183_without_sdp=" + data.ignore_183_without_sdp +
        "&moh_passthrough=" + data.moh_passthrough +
        "&@CUSTOMERID=" + data['@CUSTOMERID'] +
        "&@TRUNKID=" + data['@TRUNKID'] +
        "&@USERID=" + data['@USERID']);
        
      const convert = JSON.stringify(dados);
      console.log(convert);
      return convert.replace(/["|{}|\[\]]/g, '');

      } else {
        console.log("return -1");
        return -1;
      }
  }

  reqUpdate(_id: string, _updatePsEndpointsDto: UpdatePsEndpointsDto) {
    return this.PsEndpointsModel.findByIdAndUpdate(
      { _id },
      { $set: _updatePsEndpointsDto },
      { new: true },
    );
  }

  reqDestroy(_id: string) {
    return this.PsEndpointsModel.deleteOne(PsEndpoints);
  }

}
