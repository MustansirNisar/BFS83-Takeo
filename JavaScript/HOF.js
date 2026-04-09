function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function calculator(a,b,calculate){
    return calculate(a,b);
}

let result1 = calculator(10,2,add)
let result2 = calculator(10,2,subtract)
let result3 = calculator(10,2,divide)
console.log(result1,result2,result3)