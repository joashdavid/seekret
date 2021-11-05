type UserRegistrationModel = {
    name: string;
    email: string;
    phoneNo: string;
    countryCode: string;
    password: string;
  }

type UserLoginModel = {
    email: string;
    password: string;
}
interface ThemeModel{
  color: string;
  hexcodeStart:string;
  hexcodeEnd:string;
}

interface ContactModel{
  roles: string[];
  address: string;
bankAccount: string;
bankAddress: string;
bankName: string;
city: string;
contactId: string;
contactName: string;
contactPic: string;
contactType: string;
country: string;
email: string
roleId: string[];
gst: string;
ifsc: string;
orgId: string | null;
pan: string;
phoneNo: string;
postcode: string;
state: string;
status: string;
swift: string;
groups:number[]
}





export { UserRegistrationModel, UserLoginModel,ThemeModel, ContactModel }
