import { apiRequest } from "../../../services/axios/axios"

const getOrgApi = async() => {
    const data = {
        pagination: {
            pgNo: 2,
            limit: 2
        },
        searchPattern: "%",
        sort: {
            column: "orgName",
            order: "ASC"
        }
    }
    return await apiRequest("GET",'organizations/fetchOrg?pgNo=1&limit=100',data)
}

export {getOrgApi}
