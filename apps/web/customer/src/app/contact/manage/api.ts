import { apiRequest } from "../../../services/axios/axios"
import { ContactModel } from "../model"

import { useSelector } from "react-redux"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getContactApi = async(orgId:any,column:string,pgNo:number,limit:number,order:string) => {
    // const orgId = useSelector(state)
    // const orgId  = store.getState()
    console.log()
    const dataToserver = {
        orgId: orgId.orgId,
        options: {
            sort: {
                column: column,
                order: order
            },
            pagination: {
                "pgNo": pgNo,
                "limit": limit
            },
            filters: {
                contactType: ["individual"],
                role: ["1"],
                status: ["saved"],
                searchPattern:"%"
            }
        }
    }
    console.log(dataToserver)
    console.log("local storage",localStorage.getItem("orgId"))
    const response = await apiRequest("POST",'contacts/manage/fetch',dataToserver)
    console.log("response api", response)
    return response

}

const sendInviteApi = async(contact:ContactModel) => {
    const dataToserver = {
        orgId:contact.orgId,
        contactId:contact.contactId
    }
    console.log(dataToserver)
        return await apiRequest("POST",'contacts/invite',dataToserver)
}

export {getContactApi, sendInviteApi}
