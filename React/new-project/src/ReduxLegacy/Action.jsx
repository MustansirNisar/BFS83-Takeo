export let increment = ()=>{
    return{
        type: "increment"
    }
}

export let decrement = ()=>{
    return{
        type: "decrement"
    }
}

export let bColor = (color)=>{
    return{
        type: "setbColor",
        payload: color
    }
}