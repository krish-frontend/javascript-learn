
// let container = document.querySelector("#container");
// let para = document.querySelector("#para").style.background="red";
// para.textContent="bhaijaan"

// // container.removeChild(para);

// let call =()=>console.log("hello krish");

// let btn = document.querySelector(".btn");
// // btn.addEventListener("click",call)

// btn.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("Child clicked");
// });


// //------event delegation-----

// //tagname always return <button/> to BUTTON means always return uppercase if u match tagname with that
// let prt = document.querySelector("#parent");

// let btnAll =(el)=>{
//     if(el.target.tagName ==="BUTTON"){
//         console.log(`clicked : ${el.target.textContent}`)
//         return;
//     };
// };

// prt.addEventListener("click", btnAll);

// let parent = document.getElementById("parent2");

// let callOne = (el)=>{
//     if(el.target.tagName === "BUTTON"){
//         console.log(`select: ${el.target.textContent}`)
//         return;
//     };
// };
// parent.addEventListener("click", callOne);

// --------form event---

let form =document.querySelector("#myForm");
let userin =document.querySelector("#name");
let mssg =document.querySelector("#message");

let defaultMssg =(el)=>{
    el.preventDefault()
    if(userin.value.trim() === ""){
        console.log("required feild filled plss")
    }else{
        console.log("form submit successfully!!")
    };
};


form.addEventListener("click", defaultMssg);