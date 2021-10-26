import { apiRequest } from "../../services/axios/axios"

const createOrganizationApi = async(orgName:string, shortName:string, theme:string) => {
    const dataToserver = {
        orgName:orgName,
        orgShortName:shortName,
        theme
    }
    console.log(dataToserver)
    const response = await apiRequest("POST",'organizations/create',dataToserver)
    return response
}

const getThemeApi = async() => {
    return await apiRequest("GET","organizations/fetchThemes",'')
}
const fetchOrganizationApi = async() => {
    const data = {
        pagination: {
            pgNo: 1,
            limit: 100
        },
        searchPattern: "%",
        sort: {
            column: "orgName",
            order: "ASC"
        }
    }
    return  await apiRequest(
        'POST',
        'organizations/fetchOrg',
        data
      )
}

export {createOrganizationApi, getThemeApi,fetchOrganizationApi}
