//syntax
// let objectName = {
//     key1: value1,
//     key2: value2,
//     key3: value3,
//     ...
//     ...
// };

// let student = {
//     name: "Sandeep",
//     age: 25,
//     course: "FSD",
//     isRegistered: true
// }
//Accessing the Properties
//Dot Notation
// console.log(student.course)
// console.log(student.age)

//Bracket Notation
// console.log(student["name"])
// console.log(student["isRegistered"])
// let abc = "name"
// console.log(student[abc])
// console.log(student.abc)
// console.log(student)
// console.log(typeof student)


// let student = {
//     name: "Nitish",
//     age: 25,
//     id: 1234,
//     course: "FSD"
// }

// //Adding a new Property
// student.country = "Nepal"
// //Updating Existing Property
// student.age = 20;
// //Deleting a Property
// delete student.id
// console.log(student)

//Nested Objects
// let student = {
//     name: "Nitish",
//     age: 25,
//     id: 1234,
//     greet(){
//         console.log("Hey, my name is:"+ this.name)
//     },
//     course: "FSD",
//     address:{
//         country: "Nepal",
//         city: "New York",
//         zip: 12345

//     }
// }
// // console.log(student.address.zip)
// student.greet();

//Object Methods
// let student = {
//     name: "Sushant",
//     id: 123,
//     course: "FSD",
//     country: "Nepal"
// }
//Object.keys()...returns an array of property names/keys
// let newArr = Object.keys(student)
// console.log(newArr)

// Object.keys(student).forEach((key)=>{
//         console.log(key,":", student[key] )
// })

//Object.values()....returns an array of property values.
// let student = {
//     name: "Sushant",
//     id: 123,
//     course: "FSD",
//     country: "Nepal"
// }
// let valArr = Object.values(student)
// console.log(valArr)


//Object.entries()....returns an aray key-value pairs
// let student = {
//     name: "Sushant",
//     id: 123,
//     course: "FSD",
//     country: "Nepal"
// }
// let newArr = Object.entries(student)
// console.log(newArr)


//Object.freeze()....Makes an object immutable
// let student = {
//     name: "Sushant",
//     id: 123,
//     course: "FSD",
//     country: "Nepal"
// }
// Object.freeze(student)
// student.id = 3333;
// student.city = "New York";
// delete student.country;
// console.log(student)

//Object.seal()....You can modifiy existing properties, but can't add or remove a property.
// Object.seal(student)
// student.id = 3333;
// student.city = "New York";
// delete student.country;
// console.log(student)

//for..in loop
// // syntax   for(let variable in object/array){
// // }

// let student = {
//     name: "Sushant",
//     id: 123,
//     course: "FSD",
//     country: "Nepal"
// }
// console.log(student["name"])
// for(let k in student ){
//     console.log(k, ":", student[k])
// }


// let arr = ["abc", "def", "ghi", "jkl", "mno"]
// for(let idx in arr){
//     console.log(idx, arr[idx])
// }