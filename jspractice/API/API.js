

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


// async function objNameEmail(){
//     try{
//         const dataRec = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!dataRec.ok){
//            throw new Error(`HTTP Error: ${dataRec.status}`);
//         }

//         const dataTrans = await dataRec.json();

//         console.log(dataTrans);

//         const findNameEmail = dataTrans
//         .filter(el=> el.address.city ==="Wisokyburgh")
//         .map(el=>{return {Name: el.name, "E-Mail":el.email}});

//         console.log(findNameEmail);

//     }catch(error){
//         console.log(error.message)
//     }
// };

// objNameEmail();


// practice 3 -API practice 
// Find users whose email domain is biz and return their names and cities.


// async function find_User_Email(){
//     try{
//         const dataLink = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!dataLink.ok){
//             throw new Error(`HTTPS Error: ${dataLink.status}`);
//         }

//         const jsonData = await dataLink.json();
//         console.log(jsonData);

//         const resUlt = jsonData
//         .filter(el=> el.email.endsWith(".biz"))
//         .map(el=> ({Name: el.name, Cities: el.address.city}))

//         console.log(resUlt);

//     }catch(error){
//         console.log(error.message)
//     }
// }

// find_User_Email();


// practice 4 -API practice
// Find users whose company name contains the word "Group", then return:
// - User name
// - Company name
// - Email


// async function findUser_Company() {
//     try{
//         const apiData = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!apiData.ok){
//             throw new Error(`HTTPS Error: ${apiData.status}`);
//         }

//         const tranApiData = await apiData.json();
//         console.log(tranApiData)

//         const finalResult = tranApiData
//         .filter(el=>el.company.name.includes("Group"))
//         .map(el=>({Name: el.name, Company: el.company.name, "E-Mail": el.email}))

//         console.log(finalResult);

//     }catch(error){
//         console.log(error.message)
//     }
// }

// findUser_Company();



// practice 5-API practice
// Find users who satisfy both conditions:
// 1. Their city is "Gwenborough".
// 2. Their company name contains "Group".
// Return only their name and company name


// async function findUserCC() {
//     try{
//         const datafrmAPI = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!datafrmAPI.ok){
//             throw new Error(`HTTPS Error: ${datafrmAPI.status}`);
//         }

//         const jsonForm = await datafrmAPI.json();

//         console.log(jsonForm);

//         const outputR = jsonForm
//         .filter(el=>el.address.city === "Gwenborough" && el.company.name.includes("Group"))
//         .map(el=>({Name: el.name, "Company-Name": el.company.name}))

//        console.log(outputR)

//     }catch(error){
//         console.log(error.message)
//     }
// }

// findUserCC()



// practice 6-API practice

// Task: Find the first user whose city is "Gwenborough" and display their name and email.

// Use:
// - fetch()
// - async/await
// - try/catch
// - find()


async function findCityOfUser() {
    try{
        const dataRec = await fetch("https://jsonplaceholder.typicode.com/users"); 

        if(!dataRec.ok){
            throw new Error(`HTTPS Error: ${dataRec}`)
        }

        const dataJson = await dataRec.json();
        console.log(dataJson);

        const resultDataJson = dataJson
        .find(el=>el.address.city==="Gwenborough")
        
        console.log(resultDataJson);

    }catch(error){
        console.log(error.message)
    }
}

findCityOfUser();