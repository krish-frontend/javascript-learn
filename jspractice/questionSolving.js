// // q.1

// for(let i=1;i<=20;i++){
//     console.log(i)
// }

// //q.2

// for(let i=1; i<=50;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// // q.3

// let count=10;

// while(count>=1){
//     console.log(count)
//     count-=1
// }

// //q. 4

// let i=0;

// do{
//     console.log("hello");
//     i++;
// }while(i<5)

// //q. 5

// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// for(let fruit of fruits){
//     console.log(fruit)
// }

// intermediate level ques

// //q.6

// let numbers = [12, 7, 9, 20, 33, 44, 51, 60];
// let evenNumbers = [];

// for(let i of numbers){
//     if(i%2===0){
//         evenNumbers.push(i)
//     }
// }

// console.log(evenNumbers)

// //q. 7

// let numbers = [2, 5, 8, 11, 14, 17, 20, 23];

// let odd = 0;
// let even = 0;

// for(let i of numbers){
//     if(i%2===0){
//         even++
//     }else{
//         odd++
//     }
// }

// console.log(`ODD:- ${odd}`);
// console.log(`EVEN:- ${even}`;)


// //q.8

// for (let i = 1; i <= 10; i++) {

//     if (i % 2 === 0) {
//         continue;
//     }

//     console.log(i);
// }

// //predict :- 1,3,5,7,9,

// //q.9

// for (let i = 1; i <= 10; i++) {

//     if (i === 6) {
//         break;
//     }

//     console.log(i);
// }
// //predict: -12345

// //q.10

// let student = {
//     name: "Krish",
//     age: 24,
//     class: 5,
//     passed: true
// };

// for(let i in student){
//     console.log(`${i}:${student[i]}`)
// }

// // //q.12

// let numbers = [56, 45, 7, 12, 23, 89];

// let max = numbers[0]

// for(let i=0; i<numbers.length;i++){

//     for(let j=i+1; j<numbers.length;j++){

//         if(numbers[j]<max){
//             max = numbers[j]
//         }
//     }
// }

// console.log(max)


// //q.13
// let number = [45, 12, 78, 3, 56, 9];

// let min= number[0];

// for(let i=0; i<number.length; i++){
//     for(let j=i+1; j<number.length; j++){
//         if(number[j]<min){
//             min=number[j]
//         };
//     };
// };

// console.log(min);



// //q.14

// let numbers = [10, 20, 30, 40, 50];



// for(let i = 0, j = numbers.length - 1; i < j; i++, j--){
//     let temp = numbers[i];
//     numbers[i]= numbers[j];
//     numbers[j]=temp;
// }

// console.log(numbers)

// //q.15

// let numbers = [10, -5, 0, 20, -8, 0, 15];

// let negNum = 0;
// let posNum = 0;
// let zeroCount = 0;

// for(let i of numbers){
//     if(i<0){
//     negNum++
//     }else if(i>0){
//         posNum++
//     }else{
//         zeroCount++
//     }
// }

// console.log(`Majority count of Negative Number: ${negNum}`);
// console.log(`Majority count of Positive Number: ${posNum}`);
// console.log(`Majority count of Zeroes Number: ${zeroCount}`);


//q.16

// let numbers = [10, 20, 30, 40, 50];

// for(let i=0; i<numbers.length;i++){
//     if(numbers[i]===30){  
//         console.log(`Number Found on the indeces of ${numbers.indexOf(numbers[i])}`)              
//         break;       
//     }
//     console.log(i )
// }

// //q.17 Print numbers from 1 to 30, but don't print numbers divisible by 3.

// for(let i=1;i<=30;i++){
//     if(i%3===0){
//         console.log(`${i}this number division by 3 `)
//         continue;
//     }
//     console.log(i)
// }

// //q.18  Count vowels

// let word = "javascript";

// let vowelCount = 0;

// for(let i of word){
//     if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
//         vowelCount++
//         console.log(`This is a vowel ${i}`)
//         continue;
//     }
//  console.log(i)
// }

// console.log(`Result:- Total number of count is ${vowelCount}`);

// //q. 19. Reverse a string

// let word = "hello";

// let newStr = word.split("");

// for(let i=0, j=newStr.length-1; i<j; i++,j--){
    
//     let temp = newStr[i];
//     newStr[i] =newStr[j];
//     newStr[j]= temp;

// };

// word=newStr.join("");

// console.log(word);

//q. 20. Check palindrome

// let word = "mada";

// let isPalindrome = true;

// for(let i = 0; i<word.length/2; i++){
//     if(word[i]!==word[word.length-1-i]){
//         isPalindrome = false;
//         break;
//     };
// };

// if(isPalindrome){
//     console.log(`This is an example of Palindrome ${word}`)
// }else{
//     console.log(`This is not a Plaindrome `)
// }

// let left = 0;
// let right = word.length-1;

// let isPalindrome = true;

// while(left<right){
//     if(word[left]!==word[right]){
//         isPalindrome = false;
//         break;
//     }
//     left++;
//     right--;
// }

// if(isPalindrome){
//     console.log("yes");
// }else{
//     console.log("No")
// }

// function isPalindrome(str){

//     let cleanStr = str.toLowerCase().replace(/[^a-z,0-9]/g, '');
    
//     // case 1 inbuilt method
//     // let newStr = cleanStr.split("").reverse().join("");
    
//     // return cleanStr===newStr;


//     //case 2 loop method
//         for(let i = 0; i<cleanStr.length/2; i++){
//         if(cleanStr[i]!==cleanStr[cleanStr.length-1-i]){        
//             return false ;
//         };
//     };
//     return true;  

// };

// // let user = prompt("Enter the word for Palindrome :- ")

// // if(isPalindrome(str)){
// //     console.log("yes!! this is a palindrome ")
// // }else{
// //     console.log("no!! this is not a palindrome ")
// // }

// console.log(isPalindrome("naman"))



// // q. 21 while loop password

// let user = prompt("Enter your PASSWORD: -");
// let pW = "@krish123";

// while(user){
//     if(pW==user){
//         console.log("access granted")
//         alert("pssword set")
//         break;
//     }else if(user==user.replace(/[^a-z,0-9,@]/g, '', )){
//         console.log("Try again!!")
//         break;
//     }
// }



// // q. 22 find duplicates

// let numbers = [2, 5, 2, 8, 5, 10, 8];

// let arr = [];

// for(let i=0; i<numbers.length; i++){
//     if(!arr.includes(numbers[i])){
//         arr.push(numbers[i]);
//     }

// }
// console.log(arr);


// // q. 23 sumof all even numbers in given array

// let numbers = [2, 5, 8, 11, 14, 17, 20];

// let sumofEven = 0;

// for(let i of numbers){
//     if(i%2===0){
//         sumofEven+=i
//     };
    
// };

// console.log(sumofEven);



//q . 24 do...while menu {Keep showing the menu until the user chooses 3.}
// 1. Add
// 2. Subtract
// 3. Exit

// let userChoice = parseInt (prompt("1. Add 2. Subtract 3.Exit!!",
//                                    "choose your one:- "));

// do{
//     console.log("1. Add");
//     console.log("2. Subtract");
//     console.log("3. Exit!!");
    

//     if(userChoice===1){
//         let a = parseInt(prompt("Enter First Number:- "));
//         let b = parseInt(prompt("Enter second Number:- "));
//         console.log(a+b);
//         alert(a+b);
//         break;

//     }else if(userChoice===2){
//         let a = parseInt(prompt("Enter First Number:- "));
//         let b = parseInt(prompt("Enter second Number:- "));
//     console.log(a-b);
//     alert(a-b);
//     break;

//     } else if(userChoice===3){
//     console.log("Program ended");
//     alert("Program ended");
//     break;
    
//     }else{
//         alert("Invalid Number Enter!! Check and again TRY")
//     }

// }while(userChoice!==3);

// console.log(`User Choose Number:- ${userChoice}`);


// q.25 Find second largest

let numbers = [10, 25, 8, 40, 30];

let sec_l1 =numbers[0];     //i
// let sec_l2 =numbers[1];     //j
// let sec_l3 =numbers[2];     //k

for(let i=0; i<numbers.length;i++){
    for(let j=i+1; j<numbers.length;j++){
        for(let k=j+1; k<numbers.length; k++){
            if(numbers[i]>numbers[j] && numbers[j]>numbers[k]){
                sec_l1.push(numbers[j]);
            }else if(numbers[j]>numbers[k] && numbers[k]>numbers[i]){
                sec_l1.push(numbers[k]);
            }else{
                sec_l1.push(numbers[i]);
            };
        };
    };
};

console.log(sec_l1)
