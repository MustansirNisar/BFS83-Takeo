import {combineReducers, createStore} from 'redux'
import countReducer from './Reducer'
import colorReducer from './ColorReducer';


// let store = createStore(countReducer)
let reducer = combineReducers({
    count: countReducer,
    color: colorReducer
})

let store = createStore(reducer)
export default store;