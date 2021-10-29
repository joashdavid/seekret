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



export { UserRegistrationModel, UserLoginModel,ThemeModel }
