/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADD_ORG } from './actionType'
import { OrgActionType } from './model'
const initialState= {}
const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case OrgActionType.SWITCH_ORG:
      return {
        ...state,
        orgId: 'NEW',
      }
      default:
      return state
  }
}

export { reducers }
