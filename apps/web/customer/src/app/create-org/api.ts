
/* eslint-disable @typescript-eslint/naming-convention */
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
export {createOrganizationApi}

