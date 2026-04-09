// syntax
// let arrayName = [value1, value2, value3, ....]

// let fruits = ["Apple", "Mango", "Grapes", true, null, 23]
// console.log(fruits)

// let fruits = ["Apple", "Mango", "Grapes", "Orange"]
//Accessing an element
// console.log(fruits[2])
// fruits[4] = "Litchi";
// console.log(fruits.length)

// let fruits = ["Apple", "Mango", "Grapes", "Orange"]
// for(let i=0; i<fruits.length; i++ ){
//     // console.log("The element at index", i, "is",fruits[i]  )
//     console.log(`The element at index ${i} is ${fruits[i]}`)
// }

//for..of loop
// syntax
// for(let variable of iterable){
//     code to run
// }
// let fruits = ["Apple", "Mango", "Grapes", "Orange"]
// for(let fruit of fruits ){
//     console.log(fruit.toUpperCase())
// }

// let text = "Something"
// for(let char of text){
//     console.log(char)
// }

//Array Methods
//push()...adds an item to the end of the array.
// let fruits = ["Apple", "Mango", "Grapes", "Orange"]
// fruits.push("Kiwi")
// console.log(fruits)

//pop()....removes the last item from the array and returns it
// let fruits = ["Apple", "Mango", "Grapes", "Orange"]
// let remItem = fruits.pop();
// console.log(fruits)
// console.log(remItem)


// unshift()....adds an item to the beginning of the array
// let fruits = ["Apple", "Mango", "Grapes", "Orange"]
// fruits.unshift("Banana")
// console.log(fruits)

//shift()...removes first item from the array
// let fruits = ["Apple", "Mango", "Grapes", "Orange"]
// fruits.shift()
// console.log(fruits)


//toString()...converts an array to a string
// let fruits = ["Apple", "Mango", "Grapes", "Orange"]
// let newString = fruits.toString()
// console.log(newString)
// console.log(fruits)

//concat()
//slice()

//splice()...adds or removes items from any position 
// syntax
// Array.splice(startIndex, numberOfItemsToDelete, itemToAdd1, itemToAdd2, itemToAdd3... )
let fruits = ["Apple", "Mango", "Grapes", "Orange", "Banana"]
// fruits.splice(1,1, "Kiwi" )
// fruits.splice(2,2 )
fruits.splice(2,0, "Kiwi" )

console.log(fruits)
