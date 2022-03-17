import { SET_VISIBLE_MENU } from "../constants"

const initialState = {
    visibleMenu: false
}

const leftMenu = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBLE_MENU :
            return {
                ...state,
                visibleMenu: action.payload,
            }
        default:
            return state
    }
}


export default leftMenu