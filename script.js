

// //quest 1:- what is prompt?

// let userInp= prompt("Enter the number?")  //prompt is used to take input from user

// if(userInp%5===0){                                          //modulus arithmatic opeartor to check remainder is 0// 
//     console.log(userInp,"The number is divisible by 5")
// } else{
//     console.log(userInp, "this number not divide by 5")            //store the input from the user in console panel of inspect//
// }



// //quest 2:- how to give a grade to student according to their marks?  //using conditional//

// let marks= prompt("Enter your marks:" )
// if(marks>=90 && marks<=100){
//     console.log("your grade is A+")
// } else if(marks>=70 && marks<=89){
//     console.log("your grade is B+")
// }else if(marks>=50 && marks<=69){
//     console.log("your grade is C")
// }


// //quest. 02 practice of loops //
// let matchNum=20;

// let userNum= prompt("Enter your number for guessing: -")               

// while(userNum!=matchNum){                                               
//     console.log("you guess the wrong number! congrats")                 
// }
// console.log("guess right number! guess again")



//use condition instead of loop its work
// let num=10;

// let userNum= prompt("enter the number want to guess: ");

// if(userNum==num){
//     console.log("you guess the right number!congrats")
// }else{
//     console.log("you enter the wrong number!guess again")
// }



// let userInput= prompt("Enter your full name: ")

//solution according to loop//
// while(true){
//     console.log(`@${userInput}${userInput.length}`)
//     break;
// }
// console.log("this is infinite loop")

//solution according to condition way//
// if(userInput && userInput.trim()!==""){
//     console.log(`@${userInput}${userInput.length}`)
// }else{
//     userInput= prompt(" **enter valid name")
// }


// quest. find avg of these num
// let marks= [85,97,44,37,76,60];

// let sum=0;

// for(let i of marks){
//     sum+=i/6;
//     // console.log(i)
// }
// console.log(`avg of marks ${sum}%`)



//quest.2 offer apply//

// let items=[250,645,300,900,50];

// let i=0;
// //calculation part of inner code
// for(let val of items){
//     let offer = val/10;
//     // let items2 = i-val;                 //this for inner code check
//     items[i]= items[i]-offer          // this for changing array to new 
//     // console.log(i)

//     // console.log(`price after applying 10% offer is ${items2}`);
//     // i++;
//     // offer+=items[i];
// } //final here

// console.log(items) //this print new array through indexing 


// quest.3 method of array 

// let arrCompanies=["bloomberg","microsoft","uber","google","ibm","netflix"];
// // arrCompanies.shift()
// // console.log(arrCompanies);

// arrCompanies.push("amazon");
// console.log(arrCompanies);


//quest. find vowels in string through function

// function findVowel(a){
//     let count=0;
//     for(let i of a){
//         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
//             count++;
//         }
//     }

//     console.log(count);
// }

// const findVowel = (a) => {
//     let count=0;
//     for(let i of a){
//         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
//             count++;
//         }
//     }

//     console.log(count);
// }

// const arr=[1,2,3,4,5,6,7];

// arr.forEach((el)=>{
//     let sqNum=el*el;
//     console.log(sqNum);
// })

// const arr1=[14,16,18,9,1,30];
// let arr2= arr1.filter((val)=>{
//     let evenNum=val%2===0;
//     return evenNum;
// });

// console.log(arr2)
// const arr1=[14,16,18,9,1,30];

// let arr2=arr1.reduce((prev,curr)=>{
//     // const avg=prev+curr/arr1.length;
//     // return avg;

//     // const sum=prev+curr;
//     // return sum;

//     // const maxNum= Math.min(prev,curr);
//     // return maxNum;

//     const greatOne=prev<curr;
//     if(greatOne){
//         return prev;
//     }else{
//         return curr;
//     }

// })

// console.log(arr2)

// const arr1=[14,16,18,9,1,30];


// let arr2= arr1.forEach((val)=>{
//     let sum1Each=val+1;
//     console.log(sum1Each) ;
// })

