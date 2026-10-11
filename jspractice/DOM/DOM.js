
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

let prt = document.querySelector("#parent");

let btnAll =(el)=>{
    if(el.target.tagName ==="BUTTON"){
        console.log(`clicked : ${el.target.textContent}`)
        return;
    }
}

prt.addEventListener("click", btnAll);