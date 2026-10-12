

const promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise.then((el)=>{
    console.log(el)
});