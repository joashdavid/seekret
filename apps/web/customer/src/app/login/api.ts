import { UserLoginModel } from '../../model/model'
import { apiRequest } from '../../services/axios/axios'

const userLoginApi = async (data: UserLoginModel) => {
  const response = await apiRequest('POST', 'users/login', data)
  return response
}
const userLogoutApi = () => {
  console.log('logout')
  return 'logOut'
}

const resendOtpApi = async (email: string) => {
  const dataToserver = {
    email,
    action: 'verifyEmail',
  }
  return await apiRequest('POST', 'users/sendOtp', dataToserver)
}
const getAccessToken = async (email: string, password: string) => {
  const data = { email, password }
  console.log(data)
  const response = await apiRequest('POST', 'users/login', data)
  console.log(response)
  if (response.success) {
    localStorage.setItem('Token', response.data)
  }

  return response
}

export { userLoginApi, userLogoutApi, resendOtpApi, getAccessToken }
