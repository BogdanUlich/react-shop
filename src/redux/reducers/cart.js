const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.actualPrice + sum, 0)

const cart = (state = initialState, action) => {
    switch(action.type) {

        case 'ADD_ITEM_TO_CART':
            const currentItems = !state.items[action.payload.id] 
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                   items: currentItems,
                   totalPrice: getTotalPrice(currentItems),
                }   
            }
            
            const items = Object.values(newItems).map((obj) => obj.items)
            const allItems = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allItems)

            return {
                ...state,
                items: newItems,
                totalCount: allItems.length,
                totalPrice, 
            } 

        case 'CLEAR_CART':

            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }

        case 'REMOVE_CART_ITEM':

            const withoutRemovedItems = {
                ...state.items
            }
            const currentTotalPrice = withoutRemovedItems[action.payload].totalPrice
            const currentTotalCount = withoutRemovedItems[action.payload].items.length
            delete withoutRemovedItems[action.payload]

            return {
                ...state,
                items: withoutRemovedItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }

        default:
            return state
    }
}

export default cart