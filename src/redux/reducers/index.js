import { combineReducers } from 'redux'
import products from './products'
import filters from './filters'
import leftMenu from './leftMenu'
import category from './category'
import cart from './cart'

const rootReducer = combineReducers({
    products,
    filters,
    leftMenu,
    category,
    cart,
})

export default rootReducer
