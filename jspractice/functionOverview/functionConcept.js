


//                                  -------function concept-----

// function greet(a) {
//     return  "Hello" + a;
//     // console.log(message);
// }

// greet("krish");

//                                  --------function decalration------

// function greet(a) {
//     return  "Hello" + a;
// }
//greet("krish");

//                                  ---------function expression-------   
// let greet = function(a) {
//     return  "Hello" + a;
// }
// greet("krish");

//                                  ---------arrow function-------
// let greet = (a) => {
//     return  "Hello" + a;
// }
// greet("krish");

//                                  ---------arrow function with implicit return-------
// let greet = (a) => "Hello" + a;
// greet("krish");

//                                  ---------callback function-------
// function greet(a) {
//     return  "Hello" + a;
// }
// function run(callback) {
//     callback("krish");
// }
// run(greet);


//                                  ---------callback function with arrow function-------
// let greet = (a) => "Hello" + a;
// let run = (callback) => callback("krish");
// run(greet);
//



//                                              ---call back power---

// function sayHello() {
//     console.log("Hello");
// }

// function run(callback) {
//     callback();
// }

// run(sayHello);


// function calculate(a, b, callback) {
//     let result = a + b;
//     callback(result);
// }

// function showResult(value) {
//     console.log("Result:", value);
// }

// calculate(10, 20, showResult);

// // Important correction

// // You said the callback does the addition.

// // ❌ No.

// // The calculate() function does the addition.

// // ✅ The callback receives the result and decides what to do with that result.


// let multiple = function(a,b,cb){
//     let result=a*b;
//     cb(result);
// }

// let total =function(value){
//     console.log(value);
// };

// multiple(2,4, total);

// function outer() {
//     function inner() {
//     console.log("krish")
//      function inner2(){
//         console.log("Hello");
//         };
//         return inner2();
//     };

//     return inner();
// }

// let result = outer();

// result();

