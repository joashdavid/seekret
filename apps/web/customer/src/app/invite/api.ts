/* eslint-disable @typescript-eslint/naming-convention */

import { apiRequest } from '../../services/axios/axios'

const createAccountApi = async (
  name: string,
  email: string,
  countryCode: string,
  mobileNumber: string,
  password: string
) => {
  const dataToServer = {
    name,
    email,
    countryCode,
    phoneNo: mobileNumber,
    password,
  }
  console.log(dataToServer)
  const response = await apiRequest('POST', 'contacts/register', dataToServer)
  return response
}
const getAccessToken = async (data: {email:string,password:string}) => {
 
    const response = await apiRequest('POST', 'users/login', data)
    return response
  }
  

export {createAccountApi,getAccessToken}
