import { createStore } from "redux"
import {reducers} from './reducer'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const intialState: any= []
const store = createStore(reducers)

export {store}

