import {combineReducers} from 'redux' 

import filterReducer from './filterReducer'
import ToDoReducer from './ToDoReducer'

const rootReducer = combineReducers({filterReducer,ToDoList:ToDoReducer})
export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer