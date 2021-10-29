import { apiRequest } from "../../services/axios/axios"

const getCountryListApi = async () => {
  return await apiRequest("GET","countries-states-cities/fetchCountries","")
}

const getStateListApi = async(country:string) => {
    console.log(country)
    const response = await apiRequest("GET",`countries-states-cities/fetchStates?country=${country}`,'')
    console.log("states",response)
    return response

}


export {getCountryListApi,getStateListApi}
