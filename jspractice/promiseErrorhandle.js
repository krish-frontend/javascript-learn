
// const myPromise = ()=>{
    
//     let p1= new Promise((resolve, reject)=>{

//     setTimeout(()=>{

//         const randomNum= Math.floor(Math.random()*10);
        
//         if(randomNum <= 4){
//             resolve(`Success! Random Number:-${randomNum}`);
//         }else{
//             reject(`Error occur! Random Number:-${randomNum}`);
//         }
//     }, 2000);
// });

// return p1;

// }

// const proMise= myPromise();

//     proMise
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
    

// const asyncFunc1 =() => {
//     let p1 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("aman is comming...");
//             resolve("success-Data1!");
//         }, 2000);
//     });
//     return p1;
// };


// const asyncFunc2=() => {
//     let p1 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("krissh is coming....");
//             resolve("success-Data2!");
//         }, 6000);
//     });
//     return p1;
// };

// // data 1 call through return of arrow function
// let promise1 = asyncFunc1()
// console.log("fetching data~1 from server.....!!");     
// promise1
// .then((res)=>{

//     // always create new data call through same interval of time so written or caling data next inside the then call of data first
//     let promise2 = asyncFunc2();
//     console.log("fetching data~2 from server.....!!")
//         promise2
//         .then((res)=>{            
//         });
// })





// how callback work and way to call it
// function callBack(a,b, newCb){
//     let add=a+b;

//     newCb(add);    
// }

// callBack(2,4, (el)=>{console.log(el)});

// callback hell means nested stuff stack in one with one like nested stack like a jar fill with multiple packets of product 