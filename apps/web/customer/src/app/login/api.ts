import { UserLoginModel } from "../../model/model"
import { apiRequest } from "../../services/axios/axios"

const userLoginApi = async(data:UserLoginModel) => {
    const response = await apiRequest("POST",'users/login',data,'')
    return response
}
const userLogoutApi = () => {
    console.log("logout")
    return "logOut"
}


export  {userLoginApi, userLogoutApi}
