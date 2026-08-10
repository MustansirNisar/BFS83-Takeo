// let student = {
//   fName: "Nitish",
//   id: 2,
//   course: "DBMS",
// };
// console.log(student.fName)
// console.log(student.id)

// let{fName} = student;
// let{id} = student;
// let{course} = student;
// let { fName, id, course } = student;

// console.log(fName);
// console.log(id);
// console.log(course);

// let fruits = ["apple", "mango", "cherry"];

// let [f1, f2, f3] = fruits;

// console.log(f1);
// console.log(f2);
// console.log(f3);


//Spread Operator(...)=>allows you to spread out elements of an array/object.
// let fruits = ["apple", "mango", "cherry"];
// let moreFruits = [...fruits,"Strawberry", "litchi" ]
// console.log(moreFruits)


let student = {
    name: "Sandeep",
    id: 1,
    country:"USA"
}

let newStudent = {...student, country:"Nepal"}
console.log(newStudent)