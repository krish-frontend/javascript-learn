
const myPromise = ()=>{
    
    return
    new promise((resolve, reject)=>{

    setTimeout(()=>{

        const randomNum= Math.floor(Math.random()*10);

        if(randomNum<5){
            resolve(`Success! Random Number:-${randomNum}`);
        }else{
            reject(`Error occu! Random Number:-${randomNum}`);
        }
    }, 2000);
})
}

let proMise= myPromise();

    proMise
    .then((res)=>{
        console.log(res);
    });
    proMise
    .catch((err)=>{
        console.log(err);
    });
    





















// how callback work and way to call it
// function callBack(a,b, newCb){
//     let add=a+b;

//     newCb(add);    
// }

// callBack(2,4, (el)=>{console.log(el)});

// callback hell means nested stuff stack in one with one like nested stack like a jar fill with multiple packets of product 