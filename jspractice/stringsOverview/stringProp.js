
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

//q. 15 find duplicate 

let str = "programming";

