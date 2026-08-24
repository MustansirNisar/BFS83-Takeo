import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './CounterSlice'
// import userReducer from './UserSlice'
import cartReducer from './CartSlice'
let storee = configureStore({
    reducer:{
        cart: cartReducer
    }
})

export default storee;