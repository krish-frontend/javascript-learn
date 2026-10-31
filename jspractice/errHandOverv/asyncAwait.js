


//revision of promise and async/await

// //Practice 1 — Does catch execute?

// async function test() {
//     try {
//         await Promise.reject("Failed");
//         console.log("A");
//     } catch (error) {
//         console.log("B");
//     }

//     console.log("C");
// }

// test();

// // //Practice 2
// async function getData() {
//     const result = await Promise.resolve(20);
//     console.log(result);
// }

// getData();

// //Practice 3

// async function getData() {
//     try {
//         return "Success";
//     } finally {
//         return "Finally";
//     }
// }

// getData().then(result => console.log(result));



// // //Practice 4 api error handling with async/await

// async function getData() {
//     const response = await fetch("https://example.com/api/users");

//     if (!response.ok) {
//         throw new Error("API request failed");
//     }

//     const data = await response.json();
//     console.log(data);
// }

// //practice 5 — Promise chaining with async/await

// async function getData() {
//     try {
//         const response = await fetch(
//             "https://example.com/api/users"
//         );

//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.log("Something went wrong:", error.message);
//     }
// }

// getData();

// //practice 6 - coding practice make a function
/*Write an async function named getUsers() that:
1. Uses fetch() to request https://jsonplaceholder.typicode.com/users.
2. Checks response.ok and throws an error if the response isn't successful.
3. Converts the response into JSON using await response.json().
4. Prints the users with console.log(users).
5. Uses try/catch to handle errors.*/


// async function getUsers(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
// try{

//     if(!response.ok){
//         throw new error(`HTTP Error: ${response.status}`)
//     }

//     const data = await response.json()
//     console.log(data)
// }catch(error){
//     console.log(error.message)
//     }
// }

// getUsers();

// //practice 7- Modify the function so it prints only the name of each user instead of printing the complete array. Use a loop or an array method


// async function getUsers(){    
//     try{ 
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
//     if(!response.ok){
//     throw new Error(`HTTP Error: ${response.status}`)
//     }

//     const data = await response.json()
//     // data.forEach(user => console.log(user.name.startsWith("C") ? user.name : null));

//     const filterC = data.filter((el)=>el.name.startsWith("C" || "c"))
//     console.log(filterC)

//     }catch(error){
//         console.log(error.message)
//     }
// }

// getUsers()

// //practice 8- Modify your code to print only the names of users whose names contain more than 15 characters.


// async function getUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")

//         if(!response.ok){
//             throw new Error(`HTTP Error: ${response.status}`)
//         };

//         const data = await response.json();
//         console.log(data);

//         const filName = data
//         .filter(el=>el.name.length >15)
//         .map(el=>el.name);
        
//         console.log(filName);

//     }catch(error){
//         console.log(error.message)
//     }
// }

// getUsers()


// // practice 9 -API mini-project

// async function getUserNames(){
//     try{

//         const repsonse = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!repsonse.ok){
//             throw new Error(`HTTP Error: ${repsonse.status}`)
//         }

//         const data =await repsonse.json();

//         console.group(data)

//         const mapping = data.map(el=>el.name)
//         console.log(mapping)

//     }catch(error){
//         console.log(error.message)
//     }
// }

// getUserNames()

// // practice 10 - API mini-project with filter and find name start son

// async function getNames(){
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!res.ok){
//             throw new Error(`HTTPS Error: ${res.status}`)
//         }

//         const dataR = await res.json();

//         console.log(dataR)

//         const dataC = dataR
//         .filter(el=>el.name.toLowerCase().includes("son"))
//         .map(el=>el.name);
//         console.log(dataC)
//     }catch(error){
//          console.log(error.message)
//     }
    
// }

// getNames();

// // practice 11 - API mini-project with filter and find name start greater than 2 words 

// async function twoWords(){

//     try{
//         const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        
//         if(!resp.ok){
//             throw new Error(`HTTPS ERROR: ${resp.status}`)            
//         }

//         const dataR = await resp.json();
//         console.log(dataR);
        
//         const result = dataR
//         .filter(el=>el.name.split(" ").length>2)
//         .map(el=>el.name)

//         console.log(result)
//     }catch(error){
//         console.log(error.message)
//     }
// }

// twoWords();


// //practice 12 -Write code to fetch the users and print the names of users whose names have more than 15 characters and start with "C", ignoring uppercase/lowercase differences.

// async function grt15Words(){
//     try{
//         const respD = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!respD.ok){
//             throw new Error(`HTTPS Error: ${respD.status}`)
//         }

//         const dataRc = await respD.json();
//         const resultD = dataRc
//         .filter(el=>el.name.toUpperCase().startsWith("C") && el.name.length > 15)
//         .map(el=> el.name)

//         console.log(resultD)
//     }catch(error){
//         console.log(error.message)
//     }
// };

// grt15Words();

//practice 13 -Fetch the users and print the email addresses of users whose names start with "C" and whose email addresses end with ".biz", ignoring case.

// async function findEmailAdd(){

//     try{
//         const respEmail = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!respEmail.ok){
//             throw new Error(`HTTPS Error: ${respEmail.status}`);
//         }

//         const userDataEmail = await respEmail.json();
//         console.log(userDataEmail);

//         const getEmail = userDataEmail
//         .filter(el=>el.name.startsWith("C") && el.email.endWith(".biz"))
//         .map(el=>el.name)
        

//         console.log(getEmail)

//     }catch(error){
//         console.log(error.message)
//     }
// }

// findEmailAdd();


//practice 14 -Now fetch the users and return an array of objects containing only name and email for users whose names start with "C".

// async function getNameEmail(){
//     try{
//         const respEmail = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!respEmail.ok){
//             throw new Error(`HTTPS Error: ${respEmail.status}`)
//         }

//         const dataOfEmail = await respEmail.json();
//         console.log(dataOfEmail);

//         const resultOfEmail = dataOfEmail
//         .filter(el=>el.name.startsWith("C"))
//         .map(el=>({"Name": el.name, "E-Mail": el.email}))
        
//         console.log(resultOfEmail);

//     }catch(error){
//         console.log(error.message)
//     }
// }

// getNameEmail()



//practice 15-Fetch the users and display their names in alphabetical order (A to Z).

// async function sortNameAlpha(){
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!res.ok){
//             throw new Error(`HTTPS Error: ${res.status}`)
//         }

//         const resData = await res.json();
//         console.log(resData);

//         const alphaSortResult = resData
//         .map(el=>el.name)        
//         .sort()

//         console.log(alphaSortResult);

//     }catch(error){
//         console.log(error.message)
//     }
// }

// sortNameAlpha()


// //practice 16-Fetch the users and display their names in alphabetical reverse order (Z to A).

// async function sortNameAlpha(){
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!res.ok){
//             throw new Error(`HTTPS Error: ${res.status}`)
//         }

//         const resData = await res.json();
//         console.log(resData);

//         const alphaSortResult = resData
//         .map(el=>el.name)
        
//         .sort((a, b) => b.localeCompare(a));

//         console.log(alphaSortResult);

//     }catch(error){
//         console.log(error.message)
//     }
// }

// sortNameAlpha()


//practice 17- Sort users by name length, from shortest name to longest name.

// async function sortByNameLength() {
//     try{
//         const resData = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!resData.ok){
//             throw new Error(`HTTPS Error: ${resData.status}`)
//         }

//         const dataToJson = await resData.json();

//         const dataRec = dataToJson
//                         .map(el=>el.name)
//                         .sort((a, b) => a.length - b.length);

//                         // .sort((a,b)=>b.length - a.length) //for longest to shortest name

//         console.log(dataRec);

//     }catch(error){
//         console.log(error.message)
//     }
// }

// sortByNameLength();


    
