import { apiRequest } from "../../../services/axios/axios"

const fetchRolesApi = async() => {
    const response = await apiRequest('GET','contacts/fetchGroups','')
    return response
}

export {fetchRolesApi}
