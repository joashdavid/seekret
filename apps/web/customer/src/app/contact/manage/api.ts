import { apiRequest } from "../../../services/axios/axios"
// import { store } from "../../store"
// import { useSelector } from "react-redux"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getContactApi = async(data:any) => {
    // const orgId = useSelector(state)
    // const orgId  = store.getState()
    const dataToserver = {
        orgId: data.orgId,
        options: {
            sort: {
                column: "modifiedAt",
                order: "ASC"
            },
            pagination: {
                "pgNo": 1,
                "limit": 10
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
    return await apiRequest("POST",'contacts/manage/fetch',dataToserver)

}

export {getContactApi}
