import { SET_LOADED, SET_PRODUCTS } from "../constants"

export const setProducts = (items) => ({
    type: SET_PRODUCTS,
    payload: items,
})

export const setLoaded = (payload) => ({
    type: SET_LOADED,
    payload,
})
