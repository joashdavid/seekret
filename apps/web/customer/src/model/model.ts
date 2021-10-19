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
export { UserRegistrationModel, UserLoginModel }
