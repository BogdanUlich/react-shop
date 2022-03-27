import { SET_LOADED, SET_PRODUCT, SET_PRODUCTS } from "../constants"

export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload,
})

export const setProduct = (items) => ({
  type: SET_PRODUCT,
  payload: items,
})

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
})
