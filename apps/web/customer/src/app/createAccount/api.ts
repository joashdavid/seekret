/* eslint-disable @typescript-eslint/naming-convention */
import type {UserRegistrationModel} from '../../model/model'
// import { apiRequest } from '../../services/axios/axios'

const createAccountApi = (data: UserRegistrationModel) => {
    const dataToServer = {
        name: data.name,
        email: data.email,
        country_code :"+91",
        phone_no:data.phoneNo,
        password: data.password,
    }
    console.log(dataToServer)
    // const response = await apiRequest("POST",'users/create',dataToServer)
    // return response
}

export default createAccountApi
