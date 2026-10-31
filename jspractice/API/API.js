

// practice 1-  task: Filter users by city

async function findCity(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!res.ok){
            throw new Error(`HTTPS Error: ${res.status}`);
        }

        const dataToJson = await res.json();

        const resultFilter = dataToJson
        .filter(el=> el.address.city ==="Gwenborough")
        .map(el=>el.name)

       console.log(resultFilter);

    }catch(error){
        console.log(error.message)
    }
}

findCity();