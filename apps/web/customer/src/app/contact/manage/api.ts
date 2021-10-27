import { apiRequest } from "../../../services/axios/axios"
// import { store } from "../../store"
// import { useSelector } from "react-redux"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getContactApi = async() => {
    // const orgId = useSelector(state)
    // const orgId  = store.getState()
    const dataToserver = {
        orgId: localStorage.getItem('orgId'),
        options: {
            sort: {
                column: "modifiedAt",
                order: "DESC"
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
    console.log("local storage",localStorage.getItem("orgId"))
    return await apiRequest("POST",'contacts/manage/fetch',dataToserver)

}

export {getContactApi}
