/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADD_ORG } from './actionType'
// import { OrgActionType } from './model'

const reducers = (state = {orgId:''}, action: any) => {
  console.log(action)
  switch (action.type) {
    case "SWITCH_ORG":
      return {
      orgId : action.payload
      }
      default:
      return state
  }
}

export { reducers }
