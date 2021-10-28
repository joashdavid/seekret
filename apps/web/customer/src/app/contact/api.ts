import { apiRequest } from "../../services/axios/axios"

const getCountryListApi = async () => {
  return await apiRequest("GET","countries-states-cities/fetchCountries","")
}

const getStateListApi = async(country:string) => {
    console.log(country)
    return await apiRequest("GET",`countries-states-cities/fetchStates?country_name=${country}`,'')

}


export {getCountryListApi,getStateListApi}
