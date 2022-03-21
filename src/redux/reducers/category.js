import { SELECT_CATEGORY, SET_CATEGORY, SET_LOADED } from "../constants"

const initialState = {
    items: [],
    category: null,
    isLoaded: false
}

const categories = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORY :
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            } 
        case SELECT_CATEGORY :
            return {
                ...state,
                category: action.payload
            } 
        case SET_LOADED :
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }
}


export default categories