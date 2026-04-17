// function greet(){
//     alert("How are you doin?")
// }

//Js Handling

// let bttn =  document.querySelector("#btn")
// bttn.onmouseover = ()=>{
//     bttn.textContent = "Clicked!"
//     bttn.style.backgroundColor = "blue"  
//     bttn.style.color = "aqua"
//     bttn.style.height = "100px"  

// }
// bttn.onmouseover = ()=>{
//     bttn.style.color = "red"
// }


//using addEventListener()...
// let bttn =  document.querySelector("#btn")
// bttn.addEventListener("click", (event)=>{
//     bttn.textContent = "Clicked!"
//     bttn.style.backgroundColor = "blue"  
//     // bttn.style.color = "aqua"
//     bttn.style.height = "100px"
//     console.log(event)
//     console.log(event.target)
// })
// bttn.addEventListener("click",()=>{
//     bttn.style.color = "red"
// })

// let styleFun = ()=>{
//     bttn.textContent = "Clicked!"
//     bttn.style.backgroundColor = "blue"  
//     bttn.style.color = "aqua"
//     bttn.style.height = "100px"
// }
// bttn.addEventListener("click",styleFun )
// bttn.removeEventListener("click", styleFun )