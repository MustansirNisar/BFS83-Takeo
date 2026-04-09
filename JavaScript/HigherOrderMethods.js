//forEach()
//array.forEach(function(currentValue, index, array){
// code to execute
// })

//currentValue......The current element being processed
//index.....The index of the current element
//array.....The whole array forEach was called upon

// let fruits = ["Apple", "Mango", "Grapes", "Orange", "Banana"]
// fruits.forEach((curr, idx, arr)=>{
//         console.log(curr, "is at index", idx, "in the array", arr)
// })

// let fruits = ["Apple", "Mango", "Grapes", "Orange", "Banana"]
// fruits.forEach((curr)=>{
//         console.log(curr.toUpperCase())
// })

// let nums = [1,2,3,4,5,6]
// nums.forEach((n)=>{
//         console.log(n*n)
// })

//map()
//syntax
//array.map((curr, idx, array)=>{
    // })

// let nums = [1,2,3,4,5,6]
// const newArr = nums.map((num)=>{
//     return num*2;
// })
// console.log("This is the original Array: ", nums)
// console.log("This is the new Array: ", newArr)


//filter()
//syntax
//array.filter((curr, idx, array)=>{
    // })
// let nums = [1,2,3,4,5,6,7,8,9]
// let evenNumbers = nums.filter((num)=>{
//     return num%2 === 0;
// })
// console.log(nums)
// console.log(evenNumbers)

// const fNames = ["Diksha", "Lama", "Nitish", "Sushant", "Sandeep", "Lucy", "John"]
// let newArr = fNames.filter((name)=>{
//     return name.length > 4;
// })
// console.log(fNames)
// console.log(newArr)


//reduce()
//syntax
//array.reduce((accumulator, curr, idx, array)=>{
    // },initialValue );

//accumulator....The running total or accumulated result
//initialValue....The starting value for the accumulator
// let nums = [1,2,3,4,5,6,7,8,9]
// let initialValue = 0;
// const sum = nums.reduce((acc, curr)=>{
//         return acc+curr;
// }, initialValue)

// console.log(sum)

let nums = [1, 20, 30, 53, 15, 25, 40,70, 2, 10  ]
let initialValue = 0;
let largest = nums.reduce((acc, curr)=>{
        return acc>curr?acc:curr
}, initialValue)
console.log(largest)