import { combineReducers } from "redux"
import {v4 as uuidv4} from 'uuid'
const initState = []

export const milseReducer = (state=initState,action) => {
    switch(action.type){
        case 'ADD_ENTRY':
            return [...state, {...action.entry,id:uuidv4()}]

        case 'DELETE_ENTRY':
            return state.filter(entry => entry.id !== action.id)

        default:
            return state
    }
}

export const rootReducer = combineReducers({
    miles: milseReducer
})