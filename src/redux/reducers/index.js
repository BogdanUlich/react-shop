import { combineReducers } from "redux"
import products from "./products"
import filters from "./filters"
import category from "./category"
import cart from "./cart"

const rootReducer = combineReducers({
  products,
  filters,
  category,
  cart,
})

export default rootReducer
