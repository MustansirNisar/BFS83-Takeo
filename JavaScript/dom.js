// console.log(window)
// // console.log("How are you?")
// // window.alert("Hi")


//DOM Element Selection
//Using Id
// let heading = document.getElementById("heading")
// let paragraph = document.getElementById("para")

//Using Class Name
// let divs = document.getElementsByClassName("boxes")


//Using Tag Name
// let boxes = document.getElementsByTagName("div")

//Using query Selector
//selct using Tag Name
// let heading = document.querySelector("h1")
//Select using class Name
// let box = document.querySelector(".boxes")

//Select Using Id
// let heading = document.querySelector("#heading")


//Using querySelctorAll()
// let headings = document.querySelectorAll("h1")
// let boxes = document.querySelectorAll(".boxes")


//Dom Manipulation
//tagName....returns the tag Name
// let heading = document.querySelector("#heading")
// console.log(heading.tagName)

//innerText....returns the visible text within an element
// let heading = document.querySelector("#heading")
// console.log(heading.innerText)

//textContent....returns all the text inside an element, regardless of visibility
// let heading = document.querySelector("#heading")
// console.log(heading.textContent)
// heading.textContent = "Hey, this is the power of DOM"

//innerHTML....returns the entire HTML content inside an element
// console.log(heading.innerHTML)
// heading.innerHTML =" <p>How are you</p>"


//Accessing and Modifying Attributes
// let heading = document.querySelector("#heading")
// console.log(heading.getAttribute("style"))
// console.log(heading.getAttribute("class"))
// heading.setAttribute("class", "neww")
// heading.setAttribute("style", "color: red; background-color:aqua")
// heading.removeAttribute("id")

//Styles in DOM
// let heading = document.querySelector("#heading")
// heading.style.color = "red"
// heading.style.backgroundColor = "aqua";
// heading.style.border = "2px solid black"
//Using classList for Styling
// heading.classList.add("headingStyle")


//DOM Insertion/Deletion
let list = document.querySelector("#list")
let newElement = document.createElement("li")
newElement.textContent = "Mango"
//append()...add a node/multiple nodes as the last child of a parent
// list.append(newElement);
//prepend()...adds at the beginning
// list.prepend(newElement);

//before()...inserts content before a selected element.
let kiwi = document.querySelector("#kk")
// kiwi.before(newElement)

//after()...inserts content after the selected element..
// kiwi.after(newElement)

//remove()....to remove an element
kiwi.remove()
