
// //------simply create promise and resolve error----
// //1.
// const promise = new Promise((resolve, reject) => {
//     resolve("Success");
// });

//wihthout below .then() method promise execute but not print without .then()

// promise.then((el)=>{
//     console.log(el)
// });



//2. return in promise how is it work 
// Promise.resolve(5)
//     .then((num) => {
//         return num * 2;
//     })
//     .then((result) => {
//         console.log(result);
//     });


//3. implicit arrow function should return value 
// Promise.resolve(10)
//     .then((num) => num + 5)
//     .then((result) => result * 2)
//     .then((finalResult) => console.log(finalResult));


//4.Will it print "Failed", "Recovered", or something else? Explain your reasoning.
// Promise.reject("Failed")
//     .catch((error) => {
//         return "Recovered";
//     })
//     .then((result) => {
//         console.log(result);
//     });

//Remember: .catch() can recover from an error. If it returns a normal value, the next .then() runs successfully.


// // 5. async/await example

// async function test() {
//     console.log("A");

//     const result = await Promise.resolve("B");

//     console.log(result);
// }

// console.log("C");
// test();
// console.log("D");

// //6. async/await example with order of execution
// async function test() {
//     const result = await Promise.resolve(20);
//     console.log("A", result);
// }

// console.log("B");
// test();
// console.log("C");

// //7. error handling with async/await

async function test() {
    try{
        let result = await Promise.reject("something went wrong")
        console.log(result);
    }catch(error){
        console.log("error", error);
    }
    console.log("finished")
}

test()