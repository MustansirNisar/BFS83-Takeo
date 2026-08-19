let colorReducer = (state={backgroundColor:"blue"}, action)=>{
    switch(action.type){
        case "setbColor":
            return{backgroundColor: action.payload}
        default:
            return state;
    }

}

export default colorReducer;