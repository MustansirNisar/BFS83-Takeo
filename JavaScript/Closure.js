
// function outer(){
//     let name = "Nitish"

//     function inner(){
//         console.log(name)
//     }
//     inner();
// }

// outer();


// function outer(){
//     let name = "Nitish"

//     function inner(){
//         console.log(name)
//     }
//     return inner;
// }

// let myFunc = outer();
// myFunc();


function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count)
    }
    return inner;
}

let counter = outer();
counter();
counter();
counter();