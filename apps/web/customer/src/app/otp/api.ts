import { apiRequest } from '../../services/axios/axios'

const otpToserverApi = async (email: string | null, data: string) => {
  const dataToserver = {
    email,
    otp: data,
  }
  console.log(dataToserver)
  const response = await apiRequest('POST', 'users/verify', dataToserver,'')
  console.log(response)
  return response
}

const getAccessToken = async (data: {email:string,password:string}) => {
 
  const response = await apiRequest('POST', 'users/login', data,'')
  return response
}

const resendOtpApi = async(email:string) => {
    const dataToserver = {
        email
    }
    return await apiRequest("POST",'users/sendOtp',dataToserver,'')
    
}

export { otpToserverApi, getAccessToken, resendOtpApi }
