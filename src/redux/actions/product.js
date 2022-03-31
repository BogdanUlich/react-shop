import { SET_LOADED, SET_PRODUCT, SET_PRODUCTS } from "../constants"

export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload,
})

export const setProduct = (payload) => ({
  type: SET_PRODUCT,
  payload,
})

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
})
