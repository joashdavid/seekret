/* eslint-disable @typescript-eslint/naming-convention */

import { apiRequest } from '../../services/axios/axios'

const createAccountApi = async(name:string,email:string,mobileNumber:string,password:string) => {
    const dataToServer = {
        name,
        email,
        countryCode :"+91",
        phoneNo:mobileNumber,
        password,
    }
    console.log(dataToServer)
    const response = await apiRequest("POST",'users/create',dataToServer,'')
    return response
}

export default createAccountApi
