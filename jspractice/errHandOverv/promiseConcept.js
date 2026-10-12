
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
Promise.resolve(5)
    .then((num) => {
        return num * 2;
    })
    .then((result) => {
        console.log(result);
    });
