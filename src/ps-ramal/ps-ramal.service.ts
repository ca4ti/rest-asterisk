import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsRamalDto } from './dto/create-ps-ramal.dto';
import { UpdatePsRamalDto } from './dto/update-ps-ramal.dto';
import { PsRamal, PsRamalDocument } from './entities/ps-ramal.entity';
import { PsRamalI } from './interfaces/ps-ramal.interfaces';
import { generate } from 'short-uuid';
import { PsAorsService } from 'src/ps-aors/ps-aors.service';
import { PsAuthsService } from 'src/ps-auths/ps-auths.service';
import { PsEndpointsService } from 'src/ps-endpoints/ps-endpoints.service';
import { PsRegistrationsService } from 'src/ps-registrations/ps-registrations.service';
import { empty } from 'uuidv4';

@Injectable()
export class PsRamalService {
  constructor(
    @InjectModel(PsRamal.name)
    private PsRamalModel: Model<PsRamalDocument>,
    private readonly PsAors: PsAorsService,
    private readonly PsAuths: PsAuthsService,
    private readonly PsEndpoints: PsEndpointsService,
    private readonly PsRegistrations: PsRegistrationsService,
  ) {}

  create( createPsRamalDto: CreatePsRamalDto ) {
    const getData           = new this.PsRamalModel(createPsRamalDto);
    const uuid              = generate();

    const name              = getData.psRamal['name'];
    const ramal             = getData.psRamal['ramal'];
    const password          = getData.psRamal['password'];
    const context           = getData.psRamal['context'];
    const userId            = getData.psRamal['userId'];
    const customerId        = getData.psRamal['customerId'];
    const uri               = "sip:" + ramal + "@127.0.0.1:5060";

    const aors      = {
      id: ramal,
      "@CUSTOMERID": userId,
      "@USERID": customerId,
      "@RAMAL": uuid,
      "@NAME": name,
    };
    
    const auths     = {
      id: ramal,
      password: password,
      username: ramal,
      "@CUSTOMERID": userId,
      "@USERID": customerId,
      "@RAMAL": uuid,
      "@NAME": name,
    };

    const endpoints = {
      id: ramal,
      aors: ramal,
      auth: ramal,
      context: context,
      "@CUSTOMERID": userId,
      "@USERID": customerId,
      "@RAMAL": uuid,
      "@NAME": name,
    };

    const registrations = {
      id: ramal,
      outbound_auth: ramal,
      client_uri: uri,
      contact_user: ramal,
      server_uri: uri,
      "@CUSTOMERID": userId,
      "@USERID": customerId,
      "@RAMAL": uuid,
      "@NAME": name,
    };

    this.PsAors.create(aors);
    this.PsAuths.create(auths);
    this.PsEndpoints.create(endpoints);
    this.PsRegistrations.create(registrations);

    return { "statusCode": 200, "message": "OK", "id": uuid };
  }

  async findOne(PsRamal: any) {
    let data                    = {};
    const PsRamalRegistrations  = await this.PsRegistrations.findOne(PsRamal);
    const PsRamalEndpoints      = await this.PsEndpoints.findOne(PsRamal);
    const PsRamalAuths          = await this.PsAuths.findOne(PsRamal);
    const PsRamalAors           = await this.PsAors.findOne(PsRamal);

    data = {
      PsRamalRegistrations: {
        client_uri: PsRamalRegistrations.client_uri,
        contact_user: PsRamalRegistrations.contact_user,
        outbound_auth: PsRamalRegistrations.outbound_auth,
        server_uri: PsRamalRegistrations.server_uri,
        auth_rejection_permanent: PsRamalRegistrations.auth_rejection_permanent,
        transport: PsRamalRegistrations.transport,
        "@CUSTOMERID": PsRamalRegistrations['@CUSTOMERID'],
        "@USERID": PsRamalRegistrations['@USERID'],
        "@RAMAL": PsRamalRegistrations['@RAMAL'],
        "@NAME": PsRamalRegistrations['@NAME'],
      },

      PsRamalEndpoints: {
        id: PsRamalEndpoints.id,
        transport: PsRamalEndpoints.transport,
        aors: PsRamalEndpoints.aors,
        auth: PsRamalEndpoints.auth,
        context: PsRamalEndpoints.context,
        allow: PsRamalEndpoints.allow,
        direct_media: PsRamalEndpoints.direct_media,
        connected_line_method: PsRamalEndpoints.connected_line_method,
        direct_media_method: PsRamalEndpoints.direct_media_method,
        direct_media_glare_mitigation: PsRamalEndpoints.direct_media_glare_mitigation,
        disable_direct_media_on_nat: PsRamalEndpoints.disable_direct_media_on_nat,
        dtmf_mode: PsRamalEndpoints.dtmf_mode,
        external_media_address: PsRamalEndpoints.external_media_address,
        force_rport: PsRamalEndpoints.force_rport,
        ice_support: PsRamalEndpoints.ice_support,
        identify_by: PsRamalEndpoints.identify_by,
        mailboxes: PsRamalEndpoints.mailboxes,
        moh_suggest: PsRamalEndpoints.moh_suggest,
        outbound_auth: PsRamalEndpoints.outbound_auth,
        outbound_proxy: PsRamalEndpoints.outbound_proxy,
        rewrite_contact: PsRamalEndpoints.rewrite_contact,
        rtp_ipv6: PsRamalEndpoints.rtp_ipv6,
        rtp_symmetric: PsRamalEndpoints.rtp_symmetric,
        send_diversion: PsRamalEndpoints.send_diversion,
        send_pai: PsRamalEndpoints.send_pai,
        send_rpid: PsRamalEndpoints.send_rpid,
        timers_min_se: PsRamalEndpoints.timers_min_se,
        timers: PsRamalEndpoints.timers,
        timers_sess_expires: PsRamalEndpoints.timers_sess_expires,
        callerid: PsRamalEndpoints.callerid,
        callerid_privacy: PsRamalEndpoints.callerid_privacy,
        callerid_tag: PsRamalEndpoints.callerid_tag,
        aggregate_mwi: PsRamalEndpoints.aggregate_mwi,
        trust_id_inbound: PsRamalEndpoints.trust_id_inbound,
        trust_id_outbound: PsRamalEndpoints.trust_id_outbound,
        use_ptime: PsRamalEndpoints.use_ptime,
        use_avpf: PsRamalEndpoints.use_avpf,
        media_encryption: PsRamalEndpoints.media_encryption,
        inband_progress: PsRamalEndpoints.inband_progress,
        call_group: PsRamalEndpoints.call_group,
        pickup_group: PsRamalEndpoints.pickup_group,
        named_call_group: PsRamalEndpoints.named_call_group,
        named_pickup_group: PsRamalEndpoints.named_pickup_group,
        device_state_busy_at: PsRamalEndpoints.device_state_busy_at,
        fax_detect: PsRamalEndpoints.fax_detect,
        t38_udptl: PsRamalEndpoints.t38_udptl,
        t38_udptl_ec: PsRamalEndpoints.t38_udptl_ec,
        t38_udptl_nat: PsRamalEndpoints.t38_udptl_nat,
        t38_udptl_ipv6: PsRamalEndpoints.t38_udptl_ipv6,
        tone_zone: PsRamalEndpoints.tone_zone,
        language: PsRamalEndpoints.language,
        one_touch_recording: PsRamalEndpoints.one_touch_recording,
        record_on_feature: PsRamalEndpoints.record_on_feature,
        record_off_feature: PsRamalEndpoints.record_off_feature,
        rtp_engine: PsRamalEndpoints.rtp_engine,
        allow_transfer: PsRamalEndpoints.allow_transfer,
        allow_subscribe: PsRamalEndpoints.allow_subscribe,
        sdp_owner: PsRamalEndpoints.sdp_owner,
        sdp_session: PsRamalEndpoints.sdp_session,
        tos_audio: PsRamalEndpoints.tos_audio,
        tos_video: PsRamalEndpoints.tos_video,
        sub_min_expiry: PsRamalEndpoints.sub_min_expiry,
        from_domain: PsRamalEndpoints.from_domain,
        from_user: PsRamalEndpoints.from_user,
        mwi_from_user: PsRamalEndpoints.mwi_from_user,
        dtls_verify: PsRamalEndpoints.dtls_verify,
        dtls_rekey: PsRamalEndpoints.dtls_rekey,
        dtls_cert_file: PsRamalEndpoints.dtls_cert_file,
        dtls_private_key: PsRamalEndpoints.dtls_private_key,
        dtls_cipher: PsRamalEndpoints.dtls_cipher,
        dtls_ca_file: PsRamalEndpoints.dtls_ca_file,
        dtls_ca_path: PsRamalEndpoints.dtls_ca_path,
        dtls_setup: PsRamalEndpoints.dtls_setup,
        srtp_tag_32: PsRamalEndpoints.srtp_tag_32,
        media_address: PsRamalEndpoints.media_address,
        redirect_method: PsRamalEndpoints.redirect_method,
        set_var: PsRamalEndpoints.set_var,
        cos_audio: PsRamalEndpoints.cos_audio,
        cos_video: PsRamalEndpoints.cos_video,
        message_context: PsRamalEndpoints.message_context,
        force_avp: PsRamalEndpoints.force_avp,
        media_use_received_transport: PsRamalEndpoints.media_use_received_transport,
        accountcode: PsRamalEndpoints.accountcode,
        media_encryption_optimistic: PsRamalEndpoints.media_encryption_optimistic,
        user_eq_phone: PsRamalEndpoints.user_eq_phone,
        rpid_immediate: PsRamalEndpoints.rpid_immediate,
        g726_non_standard: PsRamalEndpoints.g726_non_standard,
        rtp_keepalive: PsRamalEndpoints.rtp_keepalive,
        rtp_timeout: PsRamalEndpoints.rtp_timeout,
        rtp_timeout_hold: PsRamalEndpoints.rtp_timeout_hold,
        bind_rtp_to_media_address: PsRamalEndpoints.bind_rtp_to_media_address,
        voicemail_extension: PsRamalEndpoints.voicemail_extension,
        mwi_subscribe_replaces_unsolicited: PsRamalEndpoints.mwi_subscribe_replaces_unsolicited,
        deny: PsRamalEndpoints.deny,
        permit: PsRamalEndpoints.permit,
        acl: PsRamalEndpoints.acl,
        contact_deny: PsRamalEndpoints.contact_deny,
        contact_permit: PsRamalEndpoints.contact_permit,
        contact_acl: PsRamalEndpoints.contact_acl,
        subscribe_context: PsRamalEndpoints.subscribe_context,
        fax_detect_timeout: PsRamalEndpoints.fax_detect_timeout,
        contact_user: PsRamalEndpoints.contact_user,
        asymmetric_rtp_codec: PsRamalEndpoints.asymmetric_rtp_codec,
        rtcp_mux: PsRamalEndpoints.rtcp_mux,
        allow_overlap: PsRamalEndpoints.allow_overlap,
        refer_blind_progress: PsRamalEndpoints.refer_blind_progress,
        notify_early_inuse_ringing: PsRamalEndpoints.notify_early_inuse_ringing,
        dtls_fingerprint: PsRamalEndpoints.dtls_fingerprint,
        incoming_mwi_mailbox: PsRamalEndpoints.incoming_mwi_mailbox,
        follow_early_media_fork: PsRamalEndpoints.follow_early_media_fork,
        accept_multiple_sdp_answers: PsRamalEndpoints.accept_multiple_sdp_answers,
        suppress_q850_reason_headers: PsRamalEndpoints.suppress_q850_reason_headers,
        trust_connected_line: PsRamalEndpoints.trust_connected_line,
        send_connected_line: PsRamalEndpoints.send_connected_line,
        ignore_183_without_sdp: PsRamalEndpoints.ignore_183_without_sdp,
        moh_passthrough: PsRamalEndpoints.moh_passthrough,
        "@CUSTOMERID": PsRamalEndpoints['@CUSTOMERID'],
        "@USERID": PsRamalEndpoints['@USERID'],
        "@RAMAL": PsRamalEndpoints['@RAMAL'],
        "@NAME": PsRamalEndpoints['@NAME'],
      },

      PsRamalAuths: {
        id: PsRamalAuths.id,
        auth_type: PsRamalAuths.auth_type,
        nonce_lifetime: PsRamalAuths.nonce_lifetime,
        md5_cred: PsRamalAuths.md5_cred,
        password: PsRamalAuths.password,
        realm: PsRamalAuths.realm,
        username: PsRamalAuths.username,
        "@CUSTOMERID": PsRamalAuths['@CUSTOMERID'],
        "@USERID": PsRamalAuths['@USERID'],
        "@RAMAL": PsRamalAuths['@RAMAL'],
        "@NAME": PsRamalAuths['@NAME'],
      },

      PsRamalAors: {
        id: PsRamalAors.id,
        contact: PsRamalAors.contact,
        default_expiration: PsRamalAors.default_expiration,
        mailboxes: PsRamalAors.mailboxes,
        max_contacts: PsRamalAors.max_contacts,
        minimum_expiration: PsRamalAors.minimum_expiration,
        remove_existing: PsRamalAors.remove_existing,
        qualify_frequency: PsRamalAors.qualify_frequency,
        authenticate_qualify: PsRamalAors.authenticate_qualify,
        maximum_expiration:  PsRamalAors.maximum_expiration,
        outbound_proxy: PsRamalAors.outbound_proxy,
        support_path: PsRamalAors.support_path,
        qualify_timeout:  PsRamalAors.qualify_timeout,
        voicemail_extension: PsRamalAors.voicemail_extension,
        "@CUSTOMERID": PsRamalAors['@CUSTOMERID'],
        "@USERID": PsRamalAors['@USERID'],
        "@RAMAL": PsRamalAors['@RAMAL'],
        "@NAME": PsRamalAors['@NAME'],
      }
    }

    return data;
  }

  async update(id: any, data: any) {

    const trunkId: any = {
      "@TRUNKID": id
    };

    const dataAors = {
      contact: "sip:" + data.PsRamal.server + ":" + data.PsRamal.port
    };

    if(data.PsRamalAdvanced.aors.max_contacts != ""){
      const max_contacts = { max_contacts: data.PsRamalAdvanced.aors.max_contacts }
      Object.assign(dataAors, max_contacts)
    }

    if(data.PsRamalAdvanced.aors.remove_existing != ""){
      const remove_existing = { remove_existing: data.PsRamalAdvanced.aors.remove_existing }
      Object.assign(dataAors, remove_existing)
    }

    if(data.PsRamalAdvanced.aors.qualify_frequency != ""){
      const qualify_frequency = { qualify_frequency: data.PsRamalAdvanced.aors.qualify_frequency }
      Object.assign(dataAors, qualify_frequency)
    }

    if(data.PsRamalAdvanced.aors.minimum_expiration != ""){
      const minimum_expiration = { minimum_expiration: data.PsRamalAdvanced.aors.minimum_expiration }
      Object.assign(dataAors, minimum_expiration)
    }

    if(data.PsRamalAdvanced.aors.default_expiration != ""){
      const default_expiration = { default_expiration: data.PsRamalAdvanced.aors.default_expiration }
      Object.assign(dataAors, default_expiration)
    }

    if(data.PsRamalAdvanced.aors.maximum_expiration != ""){
      const maximum_expiration = { maximum_expiration: data.PsRamalAdvanced.aors.maximum_expiration }
      Object.assign(dataAors, maximum_expiration)
    }

    if(data.PsRamalAdvanced.aors.qualify_timeout != ""){
      const qualify_timeout = { qualify_timeout: data.PsRamalAdvanced.aors.qualify_timeout }
      Object.assign(dataAors, qualify_timeout)
    }

    const dataAuths = {
      password: data.PsRamal.password,
      username: data.PsRamal.username
    };

    if(data.PsRamalAdvanced.auths.nonce_lifetime != ""){
      const nonce_lifetime = { nonce_lifetime: data.PsRamalAdvanced.auths.nonce_lifetime }
      Object.assign(dataAuths, nonce_lifetime)
    }

    if(data.PsRamalAdvanced.auths.md5_cred != ""){
      const md5_cred = { md5_cred: data.PsRamalAdvanced.auths.md5_cred }
      Object.assign(dataAuths, md5_cred)
    }

    if(data.PsRamalAdvanced.auths.auth_type != ""){
      const auth_type = { auth_type: data.PsRamalAdvanced.auths.auth_type }
      Object.assign(dataAuths, auth_type)
    }

    if(data.PsRamalAdvanced.auths.realm != ""){
      const realm = { realm: data.PsRamalAdvanced.auths.realm }
      Object.assign(dataAuths, realm)
    }
    
    const dataEndpoints = {
      from_user: data.PsRamal.username,
      from_domain: data.PsRamal.server
    };

    if(data.PsRamalAdvanced.endpoints.accountcode != ""){
      const accountcode = { accountcode: data.PsRamalAdvanced.endpoints.accountcode }
      Object.assign(dataEndpoints, accountcode)
    }

    if(data.PsRamalAdvanced.endpoints.sdp_session != ""){
      const sdp_session = { sdp_session: data.PsRamalAdvanced.endpoints.sdp_session }
      Object.assign(dataEndpoints, sdp_session)
    }

    if(data.PsRamalAdvanced.endpoints.sdp_owner != ""){
      const sdp_owner = { sdp_owner: data.PsRamalAdvanced.endpoints.sdp_owner }
      Object.assign(dataEndpoints, sdp_owner)
    }

    if(data.PsRamalAdvanced.endpoints.fax_detect != ""){
      const fax_detect = { fax_detect: data.PsRamalAdvanced.endpoints.fax_detect }
      Object.assign(dataEndpoints, fax_detect)
    }

    if(data.PsRamalAdvanced.endpoints.trust_id_inbound != ""){
      const trust_id_inbound = { trust_id_inbound: data.PsRamalAdvanced.endpoints.trust_id_inbound }
      Object.assign(dataEndpoints, trust_id_inbound)
    }

    if(data.PsRamalAdvanced.endpoints.send_rpid != ""){
      const send_rpid = { send_rpid: data.PsRamalAdvanced.endpoints.send_rpid }
      Object.assign(dataEndpoints, send_rpid)
    }

    if(data.PsRamalAdvanced.endpoints.send_pai != ""){
      const send_pai = { send_pai: data.PsRamalAdvanced.endpoints.send_pai }
      Object.assign(dataEndpoints, send_pai)
    }

    if(data.PsRamalAdvanced.endpoints.send_diversion != ""){
      const send_diversion = { send_diversion: data.PsRamalAdvanced.endpoints.send_diversion }
      Object.assign(dataEndpoints, send_diversion)
    }

    if(data.PsRamalAdvanced.endpoints.rtp_symmetric != ""){
      const rtp_symmetric = { rtp_symmetric: data.PsRamalAdvanced.endpoints.rtp_symmetric }
      Object.assign(dataEndpoints, rtp_symmetric)
    }

    if(data.PsRamalAdvanced.endpoints.rewrite_contact != ""){
      const rewrite_contact = { rewrite_contact: data.PsRamalAdvanced.endpoints.rewrite_contact }
      Object.assign(dataEndpoints, rewrite_contact)
    }

    if(data.PsRamalAdvanced.endpoints.identify_by != ""){
      const identify_by = { identify_by: data.PsRamalAdvanced.endpoints.identify_by }
      Object.assign(dataEndpoints, identify_by)
    }

    if(data.PsRamalAdvanced.endpoints.force_rport != ""){
      const force_rport = { force_rport: data.PsRamalAdvanced.endpoints.force_rport }
      Object.assign(dataEndpoints, force_rport)
    }

    if(data.PsRamalAdvanced.endpoints.dtmf_mode != ""){
      const dtmf_mode = { dtmf_mode: data.PsRamalAdvanced.endpoints.dtmf_mode }
      Object.assign(dataEndpoints, dtmf_mode)
    }

    if(data.PsRamalAdvanced.endpoints.direct_media != ""){
      const direct_media = { direct_media: data.PsRamalAdvanced.endpoints.direct_media }
      Object.assign(dataEndpoints, direct_media)
    }

    if(data.PsRamalAdvanced.endpoints.allow != ""){
      const allow = { allow: data.PsRamalAdvanced.endpoints.allow }
      Object.assign(dataEndpoints, allow)
    }

    if(data.PsRamalAdvanced.endpoints.context != ""){
      const context = { context: data.PsRamalAdvanced.endpoints.context }
      Object.assign(dataEndpoints, context)
    }

    if(data.PsRamalAdvanced.endpoints.disallow != ""){
      const disallow = { disallow: data.PsRamalAdvanced.endpoints.disallow }
      Object.assign(dataEndpoints, disallow)
    }

    const dataRegistrations = {
      contact_user: data.PsRamal.username,
      client_uri: "sip:" + data.PsRamal.server + ":" + data.PsRamal.port,
      server_uri: "sip:" + data.PsRamal.server + ":" + data.PsRamal.port
    };

    if(data.PsRamalAdvanced.endpoints.auth_rejection_permanent != ""){
      const auth_rejection_permanent = { auth_rejection_permanent: data.PsRamalAdvanced.endpoints.auth_rejection_permanent }
      Object.assign(dataRegistrations, auth_rejection_permanent)
    }

    if(data.PsRamalAdvanced.endpoints.transport != ""){
      const transport = { transport: data.PsRamalAdvanced.endpoints.transport }
      Object.assign(dataRegistrations, transport)
    }
    
    const findRegistrations = await this.PsRegistrations.findOne(trunkId);
    const Reg               = await this.PsRegistrations.update(findRegistrations._id, dataRegistrations);

    const findEndpoints     = await this.PsEndpoints.findOne(trunkId);
    const End               = await this.PsEndpoints.update(findEndpoints._id, dataEndpoints);

    const findAuths         = await this.PsAuths.findOne(trunkId);
    const Aut               = await this.PsAuths.update(findAuths._id, dataAuths);

    const findAors          = await this.PsAors.findOne(trunkId);
    const Aor               = await this.PsAors.update(findAors._id, dataAors);
    
    return { "statusCode": 200, "message": "OK" };
  }

  async remove(id: any) {
    const Reg = await this.PsRegistrations.remove(id);
    const End = await this.PsEndpoints.remove(id);
    const Aut = await this.PsAuths.remove(id);
    const Aor = await this.PsAors.remove(id);

    if(Reg.deletedCount == 1){
      return { "statusCode": 200, "message": "OK" };
    } else {
      return { "statusCode": 500, "message": "ERROR" };
    }
  }

}
