export interface autologinResponse {

  ReturnCode: number;
  Message: string;
  Type: string;
  ControlType: string;
  SubControlType: string;
  WelcomeBack: boolean;
  NasIPAddress: string;
  BeSpokePageName: string;
  ControllerNameId: string;
  IsHomePage: boolean;
  EnforceTermAndCond: boolean;
  IsDeviceForAutoLogin: boolean;
  IsNetWorkForAutoLogin: boolean;
  WebPageURL: string;
  lstSponsors: string
}
