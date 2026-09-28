
// console.log("Array Properties and Methods Overview");

// ------day 1 quest of array-------

// q.1 🔥 basic one
// let numbers = [10, 20, 30, 40, 50];

// // for(let i=0; i<num.length; i++){
// //     if(num[i]%20!==0){
// //         console.log(num[i])
// //     };    
// // };

// console.log(numbers[0]);
// console.log(numbers[2]);
// console.log(numbers[4]);

// //q.2 🔥 Add & Remove from Array

// let fruits = ["Apple", "Banana", "Mango"];


// fruits.push("Orange");
// fruits.pop();
// fruits.unshift("Grapes");

// console.log(fruits);

// //q.3 🔥 shift() + unshift()

// let numbers = [10, 20, 30, 40];

// numbers.shift();
// numbers.unshift(5);
// numbers.push(50);
// numbers.pop();

// console.log(numbers);


// // q.4 🔥 slice() and splice()

// let fruits = ["apple", "banana", "orange"];

// fruits.splice(0,0,"jaya", "jay");

// console.log(fruits);

// // q.5 🔥 map() concept in array

// let numbers = [5, 10, 15, 20];

// let result = numbers.map(function(el){
//     return el+=5
// });

// console.log(result);

// //q.6 🔥- filter() in array

// let numbers = [10, 15, 20, 25, 30];

// let result = numbers.filter(function(el){
//     return el > 20;
// });

// console.log(result);

// //q. 7 🔥 map() vs filter()

// let numbers = [1, 2, 3, 4, 5];

// let result = numbers
//     .filter(function(el){
//         return el%2===0;
//     })
//     .map(function(el){
//         return el*10;
//     });

// console.log(result);

// //🔥 Q8 — Find the Largest Number

// let numbers = [12, 45, 7, 89, 23];
// let largest =numbers[0];

// for(let i=0; i<numbers.length; i++){
//     // for(let j=i+1; j<numbers.length; j++){
//     //     if(numbers[i]>numbers[j]){
//     //         largest=numbers[i];
//     //     };
//     // };
//     if(numbers[i]>largest){
//         largest=numbers[i];
//     };
// };
// console.log(largest);

//🔥 Q9— Find the Smallest Number

let numbers = [12, 45, 7, 89, 23];
let smallest = numbers[0];

for(let i=0; i<numbers.length; i++){
    if(numbers[i]<smallest)
        smallest=numbers[i];   
};

console.log(smallest)
