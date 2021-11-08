import { apiRequest } from "../../../../services/axios/axios"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateClientApi = (data:any) => {
    console.log(data)
}

const fetchClientDetailsApi = async(orgId:string|null,contactId:string) => {
    const response =await apiRequest('POST', 'contacts/employees/fetchEmployee', {orgId,contactId})
    return response
  }

export {updateClientApi,fetchClientDetailsApi}
