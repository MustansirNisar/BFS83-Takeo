import {createSlice} from '@reduxjs/toolkit'

let cartSlice = createSlice({
    name: "cart",
    initialState: {items: []},
    reducers: {
        addToCart: (state, action)=>{
            state.items.push(action.payload)
        },
        removeFromCart: (state, action)=>{
            state.items = state.items.filter(item=> item.id !== action.payload)
        }
    }
});
export let {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;