import { combineReducers } from 'redux'
import productsReduser from './products'
import filtersReduser from './filters'

const rootReducer = combineReducers({
    products: productsReduser,
    filters: filtersReduser,
})

export default rootReducer
