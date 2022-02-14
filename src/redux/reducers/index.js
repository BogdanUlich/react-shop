import { combineReducers } from 'redux'
import productsReduser from './products'
import filtersReduser from './filters'
import leftMenuReduser from './leftMenu'
import categoryReduser from './category'
import cartReduser from './cart'

const rootReducer = combineReducers({
    products: productsReduser,
    filters: filtersReduser,
    leftMenu : leftMenuReduser,
    categories: categoryReduser,
    cart: cartReduser
})

export default rootReducer
