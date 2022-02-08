import { combineReducers } from 'redux'
import productsReduser from './products'
import filtersReduser from './filters'
import leftMenuReduser from './leftMenu'
import categoryReduser from './category'

const rootReducer = combineReducers({
    products: productsReduser,
    filters: filtersReduser,
    leftMenu : leftMenuReduser,
    categories: categoryReduser,
})

export default rootReducer
