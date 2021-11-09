type UserRegistrationModel = {
  name: string
  email: string
  phoneNo: string
  countryCode: string
  password: string
}

type UserLoginModel = {
  email: string
  password: string
}
interface ThemeModel {
  color: string
  hexcodeStart: string
  hexcodeEnd: string
}

interface ContactModel {
  roles: string[]
  address: string
  bankAccount: string
  bankAddress: string
  bankName: string
  city: string
  contactId: string
  contactName: string
  contactPic: string
  contactType: string
  country: string
  email: string
  roleId: string[]
  gst: string
  ifsc: string
  orgId: string | null
  pan: string
  phoneNo: string
  postcode: string
  state: string
  status: string
  swift: string
  groups: number[]
}
interface ContactDetailModel {
  aadharNo: string|null
  band: string|null
  bankAccountName: string|null
  bankAccountNo: string|null
  bankBranch: string|null
  bankName: string|null
  bloodGroup: string|null
  businessUnit: string|null
  contactId: string
  ctc: string|null
  department: string|null
  designation: string|null
  displayName: string|null
  dob: string|null
  emergencyContact: string|null
  employeeId: string|null
  employeeStatus: string|null
  employmentType: string|null
  gender: string|null
  ifsc: string|null
  insuranceNo: string|null
  insuranceProvider: string|null
  insuranceStatus: string|null
  joiningDate: string|null
  netSalary: string|null
  noticePeriod: string|null
  officeLocation: string|null
  pan: string|null
  personalEmail: string|null
  reportingTo: string|null
  resignationDate: string|null
  uanNo: string|null
  swift: string|null
  netStipend:string|null
  employmentStatus:string|null
  businessType:string|null
  vendorStatus:string|null
  website?:string|null
  unit?:string|null
  gst?:string|null
  relationShip?:string|null
  bankAddress?:string|null
  engType?:string|null
  gstRegType?:string|null
  gstRegNo?:string|null
  trnNo:string|null
  currency:string|null
  paymentTerms:string|null
  service:string|null
  rate:string|null
}
export { UserRegistrationModel, UserLoginModel, ThemeModel, ContactModel, ContactDetailModel }
