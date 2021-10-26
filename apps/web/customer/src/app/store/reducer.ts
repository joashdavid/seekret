/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADD_ORG } from './actionType'
// import { OrgActionType } from './model'
const initialState= {}
const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case "SWITCH_ORG":
      console.log(action.payload)
      return {
        ...state,
        orgId: 'NEW',
      }
      default:
      return state
  }
}

export { reducers }
