const initialState = {
    visibleMenu: false
}

const leftMenu = (state = initialState, action) => {
    if(action.type === 'SET_VISIBLE_MENU') {
        return {
            ...state,
            visibleMenu: action.payload,
        }
    }
    return state
}


export default leftMenu