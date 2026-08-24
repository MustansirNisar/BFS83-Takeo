import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name: "user",
    initialState: {name:"", age:20},
    reducers:{
        setUser:(state, action)=>{
            state.name = action.payload.name;
            state.age = action.payload.age;
        }
    }
})

export let {setUser} = userSlice.actions;
export default userSlice.reducer;