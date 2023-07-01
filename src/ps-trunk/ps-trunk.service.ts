import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePsTrunkDto } from './dto/create-ps-trunk.dto';
import { UpdatePsTrunkDto } from './dto/update-ps-trunk.dto';
import { PsTrunk, PsTrunkDocument } from './entities/ps-trunk.entity';
import { PsTrunkI } from './interfaces/ps-trunk.interfaces';
import { generate } from 'short-uuid';
import { PsTrunkAorsService } from 'src/ps-trunk-aors/ps-trunk-aors.service';
import { PsTrunkAuthsService } from 'src/ps-trunk-auths/ps-trunk-auths.service';
import { PsTrunkEndpointsService } from 'src/ps-trunk-endpoints/ps-trunk-endpoints.service';
import { PsTrunkRegistrationsService } from 'src/ps-trunk-registrations/ps-trunk-registrations.service';
import { empty } from 'uuidv4';

@Injectable()
export class PsTrunkService {
  constructor(
    @InjectModel(PsTrunk.name)
    private PsTrunkModel: Model<PsTrunkDocument>,
    private readonly psTrunkAors: PsTrunkAorsService,
    private readonly psTrunkAuths: PsTrunkAuthsService,
    private readonly psTrunkEndpoints: PsTrunkEndpointsService,
    private readonly psTrunkRegistrations: PsTrunkRegistrationsService,
  ) {}

  create( createPsTrunkDto: CreatePsTrunkDto ) {
    const getData           = new this.PsTrunkModel(createPsTrunkDto);
    const uuid              = generate();
    const techPrefix        = "Prefix" + uuid.substr(16);

    const server            = getData.psTrunk['server'];
    const username          = getData.psTrunk['username'];
    const password          = getData.psTrunk['password'];
    const port              = getData.psTrunk['port'];
    const userId            = getData.psTrunk['userId'];
    const customerId        = getData.psTrunk['customerId'];
    const uri               = "sip:" + server + ":" + port;

    const aors      = {
      id: uuid,
      contact: uri,
      '@USERID': userId,
      '@CUSTOMERID': customerId,
      '@TRUNKID': uuid,
      '@TECHPREFIX': techPrefix,
    };
    
    const auths     = {
      id: uuid + "-auth",
      password: password,
      username: username,
      '@USERID': userId,
      '@CUSTOMERID': customerId,
      '@TRUNKID': uuid,
      '@TECHPREFIX': techPrefix,
    };

    const endpoints = {
      id: uuid,
      aors: uuid,
      auth: uuid,
      context: "default",
      outbound_auth: uuid + "-auth",
      from_domain: server,
      from_user: username,
      '@USERID': userId,
      '@CUSTOMERID': customerId,
      '@TRUNKID': uuid,
      '@TECHPREFIX': techPrefix,
    };

    const registrations = {
      id: uuid + "-reg",
      outbound_auth: uuid + "-auth",
      client_uri: uri,
      contact_user: username,
      server_uri: uri,
      '@USERID': userId,
      '@CUSTOMERID': customerId,
      '@TRUNKID': uuid,
      '@TECHPREFIX': techPrefix,
    };

    this.psTrunkRegistrations.create(registrations);
    this.psTrunkEndpoints.create(endpoints);
    this.psTrunkAuths.create(auths);
    this.psTrunkAors.create(aors);

    return { "statusCode": 200, "message": "OK", "id": uuid };
  }

  async findOne(PsTrunk: any) {
    let data                    = {};
    const psTrunkRegistrations  = await this.psTrunkRegistrations.findOne(PsTrunk);
    const psTrunkEndpoints      = await this.psTrunkEndpoints.findOne(PsTrunk);
    const psTrunkAuths          = await this.psTrunkAuths.findOne(PsTrunk);
    const psTrunkAors           = await this.psTrunkAors.findOne(PsTrunk);

    data = {
      PsTrunkRegistrations: {
        client_uri: psTrunkRegistrations.client_uri,
        contact_user: psTrunkRegistrations.contact_user,
        outbound_auth: psTrunkRegistrations.outbound_auth,
        server_uri: psTrunkRegistrations.server_uri,
        auth_rejection_permanent: psTrunkRegistrations.auth_rejection_permanent,
        transport: psTrunkRegistrations.transport
      },

      PsTrunkEndpoints: {
        aors: psTrunkEndpoints.aors,
        auth: psTrunkEndpoints.auth,
        context: psTrunkEndpoints.context,
        outbound_auth: psTrunkEndpoints.outbound_auth,
        from_domain: psTrunkEndpoints.from_domain,
        from_user: psTrunkEndpoints.from_user,
        disallow: psTrunkEndpoints.disallow,
        allow: psTrunkEndpoints.allow,
        direct_media: psTrunkEndpoints.direct_media,
        dtmf_mode: psTrunkEndpoints.dtmf_mode,
        force_rport: psTrunkEndpoints.force_rport,
        identify_by: psTrunkEndpoints.identify_by,
        rewrite_contact: psTrunkEndpoints.rewrite_contact,
        rtp_symmetric: psTrunkEndpoints.rtp_symmetric,
        send_diversion: psTrunkEndpoints.send_diversion,
        send_pai: psTrunkEndpoints.send_pai,
        send_rpid: psTrunkEndpoints.send_rpid,
        trust_id_inbound: psTrunkEndpoints.trust_id_inbound,
        fax_detect: psTrunkEndpoints.fax_detect,
        sdp_owner: psTrunkEndpoints.sdp_owner,
        sdp_session: psTrunkEndpoints.sdp_session,
        accountcode: psTrunkEndpoints.accountcode
      },

      PsTrunkAuths: {
        password: psTrunkAuths.password,
        username: psTrunkAuths.username,
        nonce_lifetime: psTrunkAuths.nonce_lifetime,
        md5_cred: psTrunkAuths.md5_cred,
        auth_type: psTrunkAuths.auth_type,
        realm: psTrunkAuths.realm
      },

      PsTrunkAors: {
        contact: psTrunkAors.contact,
        max_contacts: psTrunkAors.max_contacts,
        remove_existing: psTrunkAors.remove_existing,
        qualify_frequency: psTrunkAors.qualify_frequency,
        minimum_expiration: psTrunkAors.minimum_expiration,
        default_expiration: psTrunkAors.default_expiration,
        maximum_expiration:  psTrunkAors.maximum_expiration,
        qualify_timeout:  psTrunkAors.qualify_timeout,
      }
    }

    return data;
  }

  async update(id: any, data: any) {

    const trunkId: any = {
      "@TRUNKID": id
    };

    const dataAors = {
      contact: "sip:" + data.psTrunk.server + ":" + data.psTrunk.port
    };

    if(data.psTrunkAdvanced.aors.max_contacts != ""){
      const max_contacts = { max_contacts: data.psTrunkAdvanced.aors.max_contacts }
      Object.assign(dataAors, max_contacts)
    }

    if(data.psTrunkAdvanced.aors.remove_existing != ""){
      const remove_existing = { remove_existing: data.psTrunkAdvanced.aors.remove_existing }
      Object.assign(dataAors, remove_existing)
    }

    if(data.psTrunkAdvanced.aors.qualify_frequency != ""){
      const qualify_frequency = { qualify_frequency: data.psTrunkAdvanced.aors.qualify_frequency }
      Object.assign(dataAors, qualify_frequency)
    }

    if(data.psTrunkAdvanced.aors.minimum_expiration != ""){
      const minimum_expiration = { minimum_expiration: data.psTrunkAdvanced.aors.minimum_expiration }
      Object.assign(dataAors, minimum_expiration)
    }

    if(data.psTrunkAdvanced.aors.default_expiration != ""){
      const default_expiration = { default_expiration: data.psTrunkAdvanced.aors.default_expiration }
      Object.assign(dataAors, default_expiration)
    }

    if(data.psTrunkAdvanced.aors.maximum_expiration != ""){
      const maximum_expiration = { maximum_expiration: data.psTrunkAdvanced.aors.maximum_expiration }
      Object.assign(dataAors, maximum_expiration)
    }

    if(data.psTrunkAdvanced.aors.qualify_timeout != ""){
      const qualify_timeout = { qualify_timeout: data.psTrunkAdvanced.aors.qualify_timeout }
      Object.assign(dataAors, qualify_timeout)
    }

    const dataAuths = {
      password: data.psTrunk.password,
      username: data.psTrunk.username
    };

    if(data.psTrunkAdvanced.auths.nonce_lifetime != ""){
      const nonce_lifetime = { nonce_lifetime: data.psTrunkAdvanced.auths.nonce_lifetime }
      Object.assign(dataAuths, nonce_lifetime)
    }

    if(data.psTrunkAdvanced.auths.md5_cred != ""){
      const md5_cred = { md5_cred: data.psTrunkAdvanced.auths.md5_cred }
      Object.assign(dataAuths, md5_cred)
    }

    if(data.psTrunkAdvanced.auths.auth_type != ""){
      const auth_type = { auth_type: data.psTrunkAdvanced.auths.auth_type }
      Object.assign(dataAuths, auth_type)
    }

    if(data.psTrunkAdvanced.auths.realm != ""){
      const realm = { realm: data.psTrunkAdvanced.auths.realm }
      Object.assign(dataAuths, realm)
    }
    
    const dataEndpoints = {
      from_user: data.psTrunk.username,
      from_domain: data.psTrunk.server
    };

    if(data.psTrunkAdvanced.endpoints.accountcode != ""){
      const accountcode = { accountcode: data.psTrunkAdvanced.endpoints.accountcode }
      Object.assign(dataEndpoints, accountcode)
    }

    if(data.psTrunkAdvanced.endpoints.sdp_session != ""){
      const sdp_session = { sdp_session: data.psTrunkAdvanced.endpoints.sdp_session }
      Object.assign(dataEndpoints, sdp_session)
    }

    if(data.psTrunkAdvanced.endpoints.sdp_owner != ""){
      const sdp_owner = { sdp_owner: data.psTrunkAdvanced.endpoints.sdp_owner }
      Object.assign(dataEndpoints, sdp_owner)
    }

    if(data.psTrunkAdvanced.endpoints.fax_detect != ""){
      const fax_detect = { fax_detect: data.psTrunkAdvanced.endpoints.fax_detect }
      Object.assign(dataEndpoints, fax_detect)
    }

    if(data.psTrunkAdvanced.endpoints.trust_id_inbound != ""){
      const trust_id_inbound = { trust_id_inbound: data.psTrunkAdvanced.endpoints.trust_id_inbound }
      Object.assign(dataEndpoints, trust_id_inbound)
    }

    if(data.psTrunkAdvanced.endpoints.send_rpid != ""){
      const send_rpid = { send_rpid: data.psTrunkAdvanced.endpoints.send_rpid }
      Object.assign(dataEndpoints, send_rpid)
    }

    if(data.psTrunkAdvanced.endpoints.send_pai != ""){
      const send_pai = { send_pai: data.psTrunkAdvanced.endpoints.send_pai }
      Object.assign(dataEndpoints, send_pai)
    }

    if(data.psTrunkAdvanced.endpoints.send_diversion != ""){
      const send_diversion = { send_diversion: data.psTrunkAdvanced.endpoints.send_diversion }
      Object.assign(dataEndpoints, send_diversion)
    }

    if(data.psTrunkAdvanced.endpoints.rtp_symmetric != ""){
      const rtp_symmetric = { rtp_symmetric: data.psTrunkAdvanced.endpoints.rtp_symmetric }
      Object.assign(dataEndpoints, rtp_symmetric)
    }

    if(data.psTrunkAdvanced.endpoints.rewrite_contact != ""){
      const rewrite_contact = { rewrite_contact: data.psTrunkAdvanced.endpoints.rewrite_contact }
      Object.assign(dataEndpoints, rewrite_contact)
    }

    if(data.psTrunkAdvanced.endpoints.identify_by != ""){
      const identify_by = { identify_by: data.psTrunkAdvanced.endpoints.identify_by }
      Object.assign(dataEndpoints, identify_by)
    }

    if(data.psTrunkAdvanced.endpoints.force_rport != ""){
      const force_rport = { force_rport: data.psTrunkAdvanced.endpoints.force_rport }
      Object.assign(dataEndpoints, force_rport)
    }

    if(data.psTrunkAdvanced.endpoints.dtmf_mode != ""){
      const dtmf_mode = { dtmf_mode: data.psTrunkAdvanced.endpoints.dtmf_mode }
      Object.assign(dataEndpoints, dtmf_mode)
    }

    if(data.psTrunkAdvanced.endpoints.direct_media != ""){
      const direct_media = { direct_media: data.psTrunkAdvanced.endpoints.direct_media }
      Object.assign(dataEndpoints, direct_media)
    }

    if(data.psTrunkAdvanced.endpoints.allow != ""){
      const allow = { allow: data.psTrunkAdvanced.endpoints.allow }
      Object.assign(dataEndpoints, allow)
    }

    if(data.psTrunkAdvanced.endpoints.context != ""){
      const context = { context: data.psTrunkAdvanced.endpoints.context }
      Object.assign(dataEndpoints, context)
    }

    if(data.psTrunkAdvanced.endpoints.disallow != ""){
      const disallow = { disallow: data.psTrunkAdvanced.endpoints.disallow }
      Object.assign(dataEndpoints, disallow)
    }

    const dataRegistrations = {
      contact_user: data.psTrunk.username,
      client_uri: "sip:" + data.psTrunk.server + ":" + data.psTrunk.port,
      server_uri: "sip:" + data.psTrunk.server + ":" + data.psTrunk.port
    };

    if(data.psTrunkAdvanced.endpoints.auth_rejection_permanent != ""){
      const auth_rejection_permanent = { auth_rejection_permanent: data.psTrunkAdvanced.endpoints.auth_rejection_permanent }
      Object.assign(dataRegistrations, auth_rejection_permanent)
    }

    if(data.psTrunkAdvanced.endpoints.transport != ""){
      const transport = { transport: data.psTrunkAdvanced.endpoints.transport }
      Object.assign(dataRegistrations, transport)
    }
    
    const findRegistrations = await this.psTrunkRegistrations.findOne(trunkId);
    const Reg               = await this.psTrunkRegistrations.update(findRegistrations._id, dataRegistrations);

    const findEndpoints     = await this.psTrunkEndpoints.findOne(trunkId);
    const End               = await this.psTrunkEndpoints.update(findEndpoints._id, dataEndpoints);

    const findAuths         = await this.psTrunkAuths.findOne(trunkId);
    const Aut               = await this.psTrunkAuths.update(findAuths._id, dataAuths);

    const findAors          = await this.psTrunkAors.findOne(trunkId);
    const Aor               = await this.psTrunkAors.update(findAors._id, dataAors);
    
    return { "statusCode": 200, "message": "OK" };
  }

  async remove(id: any) {
    const Reg = await this.psTrunkRegistrations.remove(id);
    const End = await this.psTrunkEndpoints.remove(id);
    const Aut = await this.psTrunkAuths.remove(id);
    const Aor = await this.psTrunkAors.remove(id);

    if(Reg.deletedCount == 1){
      return { "statusCode": 200, "message": "OK" };
    } else {
      return { "statusCode": 500, "message": "ERROR" };
    }
  }

}
