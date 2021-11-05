import { apiRequest } from "../../services/axios/axios"

const getCountryListApi = async () => {
  return await apiRequest("GET","countries-states-cities/fetchCountries","")
}

const getStateListApi = async(country:string) => {
    const response = await apiRequest("GET",`countries-states-cities/fetchStates?country=${country}`,'')
    return response

}


export {getCountryListApi,getStateListApi}
