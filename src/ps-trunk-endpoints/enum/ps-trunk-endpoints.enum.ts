export enum YesNoE {
  YES = 'yes',
  NO = 'no',
}

export enum ConnectedLineMethodE {
  INVITE = 'invite',
  REINVITE = 'reinvite',
  UPDATE = 'update',
}

export enum DirectMediaMethodE {
  INVITE = 'invite',
  REINVITE = 'reinvite',
  UPDATE = 'update',
}

export enum DirectMediaGlareMitigationE {
  NONE = 'none',
  OUTGOING = 'outgoing',
  INCOMING = 'incoming',
}

export enum DtmfModeE {
  RFC4733 = 'rfc4733',
  INBAND = 'inband',
  INFO = 'info',
  AUTO = 'auto',
  AUTO_INFO = 'auto_info',
}

export enum TimersE {
  forced = 'forced',
  no = 'no',
  required = 'required',
  yes = 'yes',
}

export enum CalleridPrivacyE {
  ALLOWED_NOT_SCREENED = 'allowed_not_screened',
  ALLOWED_PASSED_SCREENED = 'allowed_passed_screened',
  ALLOWED_FAILED_SCREEN = 'allowed_failed_screen\ned',
  ALLOWED = 'allowed',
  PROHIB_NOT_SCREENED = 'prohib_not_screened',
  PROHIB_PASSED_SCREENED = 'prohib_passed_screened',
  PROHIB_FAILED = 'prohib_failed_\nscreened',
  PROHIB = 'prohib',
  UNAVAILABLE = 'unavailable',
}

export enum Rel100E {
  NO = 'no',
  REQUIRED = 'required',
  YES = 'yes',
}

export enum MediaEncryptionE {
  NO = 'no',
  SDES = 'sdes',
  DTLS = 'dtls',
}

export enum T38UdptlEcE {
  NONE = 'none',
  FEC = 'fec',
  REDUNDANCY = 'redundancy',
}

export enum DtlsSetupE {
  ACTIVE = 'active',
  PASSIVE = 'passive',
  ACTPASS = 'actpass',
}

export enum RedirectMethodE {
  USER = 'user',
  URI_CORE = 'uri_core',
  URI_PJSIP = 'uri_pjsip',
}

export enum DtlsFingerprintE {
  SHA_1 = 'SHA-1',
  SHA_256 = 'SHA-256',
}

export enum ConditionsE {
  ZERO = '0',
  ONE = '1',
  OFF = 'off',
  ON = 'on',
  FALSE = 'false',
  TRUE = 'true',
  NO = 'no',
  YES = 'yes',
}
