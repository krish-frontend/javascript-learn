
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

//q. 7 🔥 map() vs filter()

let numbers = [1, 2, 3, 4, 5];

let result = numbers
    .filter(function(el){
        return el%2===0;
    })
    .map(function(el){
        return el*10;
    });

console.log(result);
