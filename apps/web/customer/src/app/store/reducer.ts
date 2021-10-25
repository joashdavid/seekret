import { ADD_ORG } from "./actionType"


const reducer = (state:[],action: { type: string }) => {
    if(action.type === ADD_ORG){
      console.log("Added")
    }
}

export {reducer}
