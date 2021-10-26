/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADD_ORG } from './actionType'
// import { OrgActionType } from './model'
const initialState= {orgId:''}
const reducers = (state = initialState, action: any) => {
  console.log(action)
  switch (action.type) {
    case "SWITCH_ORG":
      return {
        orgId: action.payload
      }
      default:
      return state
  }
}

export { reducers }
