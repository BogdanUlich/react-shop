import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  MINUS_CART_ITEM,
  PLUS_CART_ITEM,
  REMOVE_CART_ITEM,
  SET_WARHOUSES,
} from "../constants"

export const setWarhouses = (payload) => ({
  type: SET_WARHOUSES,
  payload,
})

export const addItemToCart = (obj) => ({
  type: ADD_ITEM_TO_CART,
  payload: obj,
})

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
})

export const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id,
})

export const minusCartItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id,
})

export const clearCart = () => ({
  type: CLEAR_CART,
})
