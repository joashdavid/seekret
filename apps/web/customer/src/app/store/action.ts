/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADD_ORG } from "./actionType"
const addOrganization = (description:any) => {
    return {
        type:ADD_ORG,
        payload:{
            description
        }
    }
}

export {addOrganization}
