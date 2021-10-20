import { apiRequest } from "../../services/axios/axios"

const otpToserver = async(email:string|null,data:string) => {
    const dataToserver = {
        email,
        otp:data
    }
    console.log(dataToserver)
    const response = await apiRequest("POST",'users/verify', dataToserver)
    console.log(response)
    return response

}

export default otpToserver
