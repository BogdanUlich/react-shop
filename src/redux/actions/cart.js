export const addItemToCart = (obj) => ({
    type: 'ADD_ITEM_TO_CART',
    payload: obj,
})

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
})