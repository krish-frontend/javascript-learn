// // q.1

// for(let i=1;i<=20;i++){
//     console.log(i)
// }

// //q.2

// for(let i=1; i<=50;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// // q.3

// let count=10;

// while(count>=1){
//     console.log(count)
//     count-=1
// }

// //q. 4

// let i=0;

// do{
//     console.log("hello");
//     i++;
// }while(i<5)

// //q. 5

// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// for(let fruit of fruits){
//     console.log(fruit)
// }

// intermediate level ques

// //q.6

// let numbers = [12, 7, 9, 20, 33, 44, 51, 60];
// let evenNumbers = [];

// for(let i of numbers){
//     if(i%2===0){
//         evenNumbers.push(i)
//     }
// }

// console.log(evenNumbers)

//q. 7

let numbers = [2, 5, 8, 11, 14, 17, 20, 23];

let odd = 0;
let even = 0;

for(let i of numbers){
    if(i%2===0){
        even++
    }else{
        odd++
    }
}

console.log(`ODD:- ${odd}`);
console.log(`EVEN:- ${even}`;)
