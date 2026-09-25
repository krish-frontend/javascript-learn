
// random
// console.log("5"+2);
// console.log("5"-2);
// console.log("5"*2);
// console.log("5"/2);

// Q1 What is the output?
// let str = "JavaScript";

// console.log(str.length);


// // q.2 find the reason why not changed ?
// let str2 = "hello";

// console.log(str2.toUpperCase());
// console.log(str2);

// because we can't modify original string without store in new var



// -----------intermediate question------

// // Q3 — Reverse a String

// let str = "Krish";

// let rev = str.split("").reverse().join("");

// console.log(rev);

// // Q4 — Count Characters

// let str = "JavaScript";

// let len = str.length;

// console.log(len);


// // Q5 — Count Vowels
// let str = "javascript";
// let count = 0;
// for(let i=0; i<str.length; i++){
//     if(str [i]==="a"||str [i]==="e"||str [i]==="i"||str [i]==="o"||str [i]==="u"){
//         count+=1;
//     };
// };


// if(str.includes("a","e","i","o","u")){
//     count++;
// }

// console.log(count);

// Q9 — Palindrome ⭐⭐⭐

// let str = "madam";

// case 1 - string method
// let reverse = str.split(" "). reverse(). join(" ");

// if(str===reverse){
//     console.log("isPalindrome")
// }else{
//     console.log("not isPalindrome")
// };


// // case 2-loop
// let isPalindrome = true;

// for(let i=0; i<str.length/2; i++){
//     if(str[i]!==str[str.length-1-i]){
//         isPalindrome = false
//         break;
//     };
// };

// if(isPalindrome){
//     console.log("this is palindrome")
// }else{
//     console.log("not isPalindrome")
// };


// // q. 10 Count a Character

// let str = "banana";
// let maxC = 0;
// let charC ="";

// for(let i=0; i<str.length; i++){
//     let count = 0;
//     for(let j=0; j<str.length; j++){
//         if(str[i]===str[j]){            
//             count++;        
//         };
//     };
//     if(maxC<count){
//         maxC=count;
//         charC=str[i];

//     };
// };

// console.log(maxC);
// console.log(charC);

// // q. 11 Remove Spaces

// let str = "Java Script Is Fun";

// console.log(str.trim().replaceAll(" ",""));

// //Q12 — Find the Longest Word ⭐⭐⭐

// let sentence = "I am learning JavaScript programming";

// let str = sentence.split(" ");
// let str2 = "";

// for(let i=0; i<str.length; i++){
//     if(str[i].length > str2.length){
//         str2=str[i];
//     };
// };

// console.log(str2);

// //  q.13 Capitalize First Letter

// let nam = "krish";

// let str2 = nam[0].toUpperCase()+nam.slice(1);

// console.log(str2);

// // q.14 count words in string 

// let sentence = "I am learning JavaScript";
// let str = sentence.split(" ");

// console.log(str.length);

// //q. 15 remove duplicate 

// let str = "programming";
// let arr = str.split("");

// let str2 = "";

// for(let i=0; i<arr.length; i++){
//     if(!str2.includes(arr[i])){
//         str2+=arr[i];
//     };
// };

// console.log(str2)


// //q.16 Check whether these two strings are anagrams:

// let a = "listen";
// let b = "silent";

// let word1= a.split("").sort().join("");
// let word2= b.split("").sort().join("");

// if(word1===word2){
//     console.log("yes")
// }else{
//     console.log("no")
// };

// //q.17 Character Frequency ⭐⭐⭐

// let str = "banana";
// let str2= "";

// for(let i=0; i<str.length; i++){
//     let char =str[i];

//     if(!str2.includes(char)){
//         let count =str.split(char).length-1;
//         console.log(char+":"+count);
//         str2+=char
//     };
// };

// // console.log(str2);

// //q. 18 Longest Word Without Using sort()

// let sentence = "JavaScript is a powerful programming language";

// let inParts = sentence.split(" ");
// let long = "";

// for(let i=0; i<inParts.length; i++){
//     if(inParts[i].length>long.length){
//         long=inParts[i];
//     };
// };

// console.log(long);


// _________________________________________
// let username = "   Krish Kumar   ";

// console.log(username.length);

// let result = username.trim();

// console.log(result);
// console.log(result.length);

// console.log(username);

// let str = "javascript";

// console.log(str.slice(-6));
// console.log(str.substring(-6))

// let str = "Krish";

// let str2 = str.split("").reverse().join("");

// console.log(str2);

// let str = "JavaScript";
// let str2 = str.split("")
// let count = 0;

// for (let i = 0; str2[i] !== undefined; i++) {
//     count++;
// }

// console.log(count)

// let str = "JavaScript Interview";
// let count = 0;


// for(let i of str){
//     if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
//         count++;
//         console.log(`the number of count ${i}`)
//         continue;

//     }
// }

// console.log(count)

// let str = "javascript";

// let count = 0;

// for(let i=0; i<str.length; i++){
//     if(str[i]==="a"){
//         count++;
//     };
// };

// console.log(count);


// let str = "madam";
// let isPalindrome =true;

// for(let i=0; i<str.length/2; i++){
//     if(str[i]!==str[str.length-1-i]){
//         isPalindrome=false;
//         break;
//     };
// };

// if(isPalindrome){
//     console.log(`this is example of palindrome :-${str}`);
// }else{
//     console.log("not a palindrome")
// }


// let str = "JavaScript is very easy";

// let str2 = str.split(" ").join("")

// console.log(str2)

// let str = "I am learning JavaScript programming";

// let str2 = str.split(" ");
// let str3 = "";

// for(let i=0; i<str2.length; i++){
//     if(str2[i].length>str3.length){
//         str3=str2[i];
//     };
// };

// console.log(str3);


// let str = "programming";
// let duplicayte = "";

// for(let i=0; i<str.length; i++){
//     count = 0;
//     for(let j=0; j<str.length; j++){
//         if(str[i]===str[j]){
//             count++;
//         };
//     };
//     if(count>1 && !duplicayte.includes(str[i])){
//         duplicayte+=str[i];
//     };
// };

// console.log(duplicayte);



    
let str = "aabbcdd";
let spl = str.split("")
let str2 = "";

for(let i=0; i<spl.length; i++){
   
        if(spl.indexOf(spl[i])===spl.lastIndexOf(spl[i])){
            str2+=spl[i];
            break;
        };
   
};

console.log(str2);