const initialState = {
    items: [],
    category: null
}

const categories = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                items: action.payload
            } 
        case 'SELECT_CATEGORY':
            return {
                ...state,
                category: action.payload
            } 
        default:
            return state
    }
}


export default categories