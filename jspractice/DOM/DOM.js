
// let container = document.querySelector("#container");
// let para = document.querySelector("#para").style.background="red";
// para.textContent="bhaijaan"

// // container.removeChild(para);

// let call =()=>console.log("hello krish");

let btn = document.querySelector(".btn");
// btn.addEventListener("click",call)

btn.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Child clicked");
});