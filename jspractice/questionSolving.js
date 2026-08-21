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

// //q. 7

// let numbers = [2, 5, 8, 11, 14, 17, 20, 23];

// let odd = 0;
// let even = 0;

// for(let i of numbers){
//     if(i%2===0){
//         even++
//     }else{
//         odd++
//     }
// }

// console.log(`ODD:- ${odd}`);
// console.log(`EVEN:- ${even}`;)


// //q.8

// for (let i = 1; i <= 10; i++) {

//     if (i % 2 === 0) {
//         continue;
//     }

//     console.log(i);
// }

// //predict :- 1,3,5,7,9,

// //q.9

// for (let i = 1; i <= 10; i++) {

//     if (i === 6) {
//         break;
//     }

//     console.log(i);
// }
// //predict: -12345

// //q.10

// let student = {
//     name: "Krish",
//     age: 24,
//     class: 5,
//     passed: true
// };

// for(let i in student){
//     console.log(`${i}:${student[i]}`)
// }

// // //q.12

// let numbers = [56, 45, 7, 12, 23, 89];

// let max = numbers[0]

// for(let i=0; i<numbers.length;i++){

//     for(let j=i+1; j<numbers.length;j++){

//         if(numbers[j]<max){
//             max = numbers[j]
//         }
//     }
// }

// console.log(max)


// //q.13
// let number = [45, 12, 78, 3, 56, 9];

// let min= number[0];

// for(let i=0; i<number.length; i++){
//     for(let j=i+1; j<number.length; j++){
//         if(number[j]<min){
//             min=number[j]
//         };
//     };
// };

// console.log(min);



// //q.14

// let numbers = [10, 20, 30, 40, 50];



// for(let i = 0, j = numbers.length - 1; i < j; i++, j--){
//     let temp = numbers[i];
//     numbers[i]= numbers[j];
//     numbers[j]=temp;
// }

// console.log(numbers)

// //q.15

// let numbers = [10, -5, 0, 20, -8, 0, 15];

// let negNum = 0;
// let posNum = 0;
// let zeroCount = 0;

// for(let i of numbers){
//     if(i<0){
//     negNum++
//     }else if(i>0){
//         posNum++
//     }else{
//         zeroCount++
//     }
// }

// console.log(`Majority count of Negative Number: ${negNum}`);
// console.log(`Majority count of Positive Number: ${posNum}`);
// console.log(`Majority count of Zeroes Number: ${zeroCount}`);


//q.16

let numbers = [10, 20, 30, 40, 50];

for(let i=0; i<numbers.length;i++){
    if(numbers[i]===30){  
        console.log(`Number Found on the indeces of ${i}`)              
        break;       
    }
    console.log(i )
}

