import { apiRequest } from "../../../services/axios/axios"

const getContactApi = async() => {
    console.log("Fetch")
    const dataToserver = {
        orgId: "1dfe8f13-5497-4db9-8ab2-f17e041cd269",
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
