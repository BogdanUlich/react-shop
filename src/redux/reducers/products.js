import { SET_LOADED, SET_PRODUCT, SET_PRODUCTS } from "../constants"

const initialState = {
  items: [],
  item: [],
  isLoaded: false,
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    case SET_PRODUCT:
      return {
        ...state,
        item: action.payload,
        isLoaded: true,
      }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      }
    default:
      return state
  }
}

export default products
