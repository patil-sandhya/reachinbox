//import { ADD_TODO } from "./ActionType"

import { CHANGE_THEME, CURRENT_THREAD, CURRENT_THREAD_DATA, GET_DATA, GET_TOKEN } from "./ActionType"

const initState = {
    theme: "dark",
    listmail:[],
    curThreadId:null,
    curThreadData:[],
    token:null
}

export const Reducer = (state= initState, {type,payload})=>{
    switch(type){
        case CHANGE_THEME: 
            return {
                ...state,
                theme:payload
            }
        case GET_TOKEN:
            return{
                ...state,
                token:payload
            }
        case GET_DATA:
            return{
                ...state,
                listmail: payload
            }
        case CURRENT_THREAD:
            return{
                ...state,
                curThreadId: payload
            }
        case CURRENT_THREAD_DATA:
            return{
                ...state,
                curThreadData: payload
            }
        default: return state
    }
}