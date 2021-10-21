import { apiRequest } from "../../services/axios/axios"

const getThemeApi = async() => {
    const response = await apiRequest("GET",'organizations/fetchThemes','') 
    return response
}

export {getThemeApi}
