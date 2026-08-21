
import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
import cartReducre from './CardReducer'

const rootReducer = combineReducers({
    productReducer,
    cartReducre
})

export default rootReducer
