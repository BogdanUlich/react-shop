export const addItemToCart = (obj) => ({
    type: 'ADD_ITEM_TO_CART',
    payload: obj,
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})
