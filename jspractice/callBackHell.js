

const asynCallBack = (dataId, nextDataCall)=>{
    setTimeout(()=>{
        console.log(`Data is coming...on id :-${dataId}`);

            if(nextDataCall){
                nextDataCall()
            };
    }, 4000);
};



asynCallBack(1, ()=>{
    console.log("get data 2.. is fetching");

    asynCallBack(2, ()=>{
        console.log("get data 3.. is fetching");

        asynCallBack(3, ()=>{
            console.log("get data 4.. is fetching");

            asynCallBack(4);
        })
    })
})