/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrgActionType } from "./model"
const addOrganization = (description:any) => {
    return {
        type:OrgActionType.SWITCH_ORG,
        payload:{
            description
        }
    }
}

export {addOrganization}
