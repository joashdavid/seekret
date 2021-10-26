import { apiRequest } from "../../../services/axios/axios"

const getContactApi = async() => {
    console.log("Fetch")
    const dataToserver = {
        orgId: localStorage.getItem("orgId"),
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
    return await apiRequest("POST",'contacts/manage/fetch',dataToserver)

}

export {getContactApi}
