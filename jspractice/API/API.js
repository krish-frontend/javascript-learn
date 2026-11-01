

// practice 1-  task: Filter users by city

// async function findCity(){
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!res.ok){
//             throw new Error(`HTTPS Error: ${res.status}`);
//         }

//         const dataToJson = await res.json();

//         const resultFilter = dataToJson
//         .filter(el=> el.address.city ==="Gwenborough")
//         .map(el=>el.name)

//        console.log(resultFilter);

//     }catch(error){
//         console.log(error.message)
//     }
// }

// findCity();


//practice 2- Filter users whose city is "Wisokyburgh" and return an array of objects containing only their name and email.


async function objNameEmail(){
    try{
        const dataRec = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!dataRec.ok){
            return `HTTPS Error: ${dataRec.status}`
        }

        const dataTrans = await dataRec.json();

        console.log(dataTrans);

        const findNameEmail = dataTrans
        .filter(el=> el.address.city ==="Wisokyburgh")
        .map(el=>{return {Name: el.name, "E-Mail":el.email}});

        console.log(findNameEmail);

    }catch(error){
        console.log(error.message)
    }
};

objNameEmail();