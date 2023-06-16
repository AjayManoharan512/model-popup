let div =document.querySelector(".popup")
let submit=document.querySelector("#subbtn")
submit.addEventListener("click",function display(){

    div.classList.add("openpopup")
})

let a =document.querySelector(".popup")
let closed=document.querySelector("#closebtn")
closed.addEventListener("click",function close(){
    a.classList.remove("openpopup")
})

let div2 = document.createElement("div2")
let content=document.createTextNode("you have to click this button for submit")
div2.appendChild(content)

let div3=document.querySelector(".divsub")
div3.insertBefore(div2,submit)

