/**
 * APIのデータ型
 */
interface LoginUser {
  staffCode: string;
  accessLevel: string
  staffName: string;
  staffNameKana: string;
  mail: string;
  phoneNumber: string;
  orgCode: string;
  orgName: string;
  executiveCode: string;
  executiveName: string;
  employmentCode: string;
  employmentName: string;
  hqRole: string;
  shopRole: string;
  personalRole: string;
  companyCode: string;
  retirementDate: Date;
  allOrganizationAccess: boolean;
  paidControl: boolean;
  administrator: boolean;
  allStaffAccess: boolean;
  retired: boolean;
  accountingRole: boolean;
  attendanceRole: boolean;
  workSystem: number;
  useSales: boolean;
  useAttend: boolean;
  useSalaryPayslip: boolean;
  holdings: boolean;
  useGpsStamp: boolean;
  useFaceStamp: boolean;
  useBarcodeStamp: boolean;
  managed: any;
  site: number;
  modifyRegireport: boolean;
  displayLaborCost: boolean;
}

export default class LoginUserDomain {
  constructor(private rawData: LoginUser) {
    // do nothing
  }

  getRawData(): LoginUser {
    return this.rawData;
  }

  get staffCode(): string {
    return this.rawData.staffCode;
  }

  get accessLevel(): string {
    return this.rawData.accessLevel;
  }

  get staffName(): string {
    return this.rawData.staffName;
  }

  get staffNameKana(): string {
    return this.rawData.staffNameKana;
  }

  get mail(): string {
    return this.rawData.mail;
  }

  get phoneNumber(): string {
    return this.rawData.phoneNumber;
  }

  get orgCode(): string {
    return this.rawData.orgCode;
  }

  get orgName(): string {
    return this.rawData.orgName;
  }

  get executiveCode(): string {
    return this.rawData.executiveCode;
  }

  get executiveName(): string {
    return this.rawData.executiveName;
  }

  get employmentCode(): string {
    return this.rawData.employmentCode;
  }

  get employmentName(): string {
    return this.rawData.employmentName;
  }

  get hqRole(): string {
    return this.rawData.hqRole;
  }

  get shopRole(): string {
    return this.rawData.shopRole;
  }

  get personalRole(): string {
    return this.rawData.personalRole;
  }

  get companyCode(): string {
    return this.rawData.companyCode;
  }

  get retirementDate(): Date {
    return this.rawData.retirementDate;
  }

  get allOrganizationAccess(): boolean {
    return this.rawData.allOrganizationAccess;
  }

  get paidControl(): boolean {
    return this.rawData.paidControl;
  }

  get administrator(): boolean {
    return this.rawData.administrator;
  }

  get allStaffAccess(): boolean {
    return this.rawData.allStaffAccess;
  }

  get retired(): boolean {
    return this.rawData.retired;
  }

  get accountingRole(): boolean {
    return this.rawData.accountingRole;
  }

  get attendanceRole(): boolean {
    return this.rawData.attendanceRole;
  }

  get workSystem(): number {
    return this.rawData.workSystem;
  }

  get useSales(): boolean {
    return this.rawData.useSales;
  }

  get useAttend(): boolean {
    return this.rawData.useAttend;
  }

  get useSalaryPayslip(): boolean {
    return this.rawData.useSalaryPayslip;
  }

  get holdings(): boolean {
    return this.rawData.holdings;
  }

  get useGpsStamp(): boolean {
    return this.rawData.useGpsStamp;
  }

  get useFaceStamp(): boolean {
    return this.rawData.useFaceStamp;
  }

  get useBarcodeStamp(): boolean {
    return this.rawData.useBarcodeStamp;
  }

  get managed(): any {
    return this.rawData.managed;
  }

  get site(): number {
    return this.rawData.site;
  }

  get modifyRegireport(): boolean {
    return this.rawData.modifyRegireport;
  }

  get displayLaborCost(): boolean {
    return this.rawData.displayLaborCost;
  }
}
