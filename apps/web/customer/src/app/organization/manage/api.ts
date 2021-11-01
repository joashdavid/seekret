import { apiRequest } from "../../../services/axios/axios"

const getOrgApi = async(column:string,pgNo:number,limit:number,order:string) => {
    const data = {
        pagination: {
            pgNo: pgNo,
            limit: limit
        },
        searchPattern: "%",
        sort: {
            column: column,
            order: order
        }
    }
    console.log(data)
    const response =  await apiRequest("POST",'organizations/fetchOrg',data)
    console.log("response",response.data)
    return response
}

const setDefaultOrgApi = async(orgId:string) => {
    console.log(orgId)
    const response = await apiRequest("PUT", 'organizations/setDefault',{orgId})
    return response
}

export {getOrgApi, setDefaultOrgApi}
