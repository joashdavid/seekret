/* eslint-disable @typescript-eslint/no-explicit-any */
// import { OrgActionType } from "./model"
const switchOrganization = (description:any) => {
    console.log(description,)
    return {
        type:"SWITCH_ORG",
        payload:{
            description
        }
    }
}

export {switchOrganization}
