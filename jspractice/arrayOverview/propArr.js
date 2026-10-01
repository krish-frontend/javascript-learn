
// console.log("Array Properties and Methods Overview");

// ------day 1 quest of array-------

// q.1 🔥 basic one
// let numbers = [10, 20, 30, 40, 50];

// // for(let i=0; i<num.length; i++){
// //     if(num[i]%20!==0){
// //         console.log(num[i])
// //     };    
// // };

// console.log(numbers[0]);
// console.log(numbers[2]);
// console.log(numbers[4]);

// //q.2 🔥 Add & Remove from Array

// let fruits = ["Apple", "Banana", "Mango"];


// fruits.push("Orange");
// fruits.pop();
// fruits.unshift("Grapes");

// console.log(fruits);

// //q.3 🔥 shift() + unshift()

// let numbers = [10, 20, 30, 40];

// numbers.shift();
// numbers.unshift(5);
// numbers.push(50);
// numbers.pop();

// console.log(numbers);


// // q.4 🔥 slice() and splice()

// let fruits = ["apple", "banana", "orange"];

// fruits.splice(0,0,"jaya", "jay");

// console.log(fruits);

// // q.5 🔥 map() concept in array

// let numbers = [5, 10, 15, 20];

// let result = numbers.map(function(el){
//     return el+=5
// });

// console.log(result);

// //q.6 🔥- filter() in array

// let numbers = [10, 15, 20, 25, 30];

// let result = numbers.filter(function(el){
//     return el > 20;
// });

// console.log(result);

// //q. 7 🔥 map() vs filter()

// let numbers = [1, 2, 3, 4, 5];

// let result = numbers
//     .filter(function(el){
//         return el%2===0;
//     })
//     .map(function(el){
//         return el*10;
//     });

// console.log(result);

// //🔥 Q8 — Find the Largest Number

// let numbers = [12, 45, 7, 89, 23];
// let largest =numbers[0];

// for(let i=0; i<numbers.length; i++){
//     // for(let j=i+1; j<numbers.length; j++){
//     //     if(numbers[i]>numbers[j]){
//     //         largest=numbers[i];
//     //     };
//     // };
//     if(numbers[i]>largest){
//         largest=numbers[i];
//     };
// };
// console.log(largest);

// //🔥 Q9— Find the Smallest Number

// let numbers = [12, 45, 7, 89, 23];
// let smallest = numbers[0];

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]<smallest)
//         smallest=numbers[i];   
// };

// console.log(smallest)

// //🔥 Q10 — Find the Second Largest Number

// let numbers = [12, 45, 7, 89, 23];

// // let largest = Math.max(...numbers);
// // let largest2 = numbers[0];

// // for(let i=0; i < numbers.length; i++){
// //     if(numbers[i] < largest && numbers[i] > largest2){
// //         largest2 = numbers[i]
// //     };
// // };

// // console.log(largest);
// // console.log(largest2);

// let largest = -Infinity;
// let largest2 = -Infinity;

// for(let i=0; i<numbers.length; i++){

//     if(largest<numbers[i]){
//         largest2=largest
//         largest=numbers[i]
//     }
//     else if(largest2<numbers[i] && numbers[i]<largest){
//          largest2=numbers[i]
//     };
// };

// console.log(`The largest number:- ${largest}`)
// console.log(`The largest2 number:- ${largest2}`)
// console.log(numbers.sort((a,b)=>a-b))

// //🔥 Q11 odd and even 

// let numbers = [12, 7, 5, 18, 20, 9, 14];
// let odd = [];
// let even = [];


//  for(let i=0; i<numbers.length; i++){
//     if(numbers[i]%2===0){
//         even.push(numbers[i])
//     }else{
//         odd.push(numbers[i])
//     };
//  };

//  console.log(`odd numbers:- ${odd} and numbers of odd present in ${odd.length}`)
//  console.log(`even numbers:- ${even} and numbers of even present in ${even.length}`)

// // 🔥 Q11 Remove Duplicates

// let numbers = [10, 20, 10, 30, 20, 40, 30];

// let duplicate = [];

// for(let i=0; i<numbers.length; i++){
//     if(!duplicate.includes(numbers[i])){
//         duplicate.push(numbers[i])
//     };
// };

// console.log(duplicate);

// // 🔥 Q12 Count Frequency

// let numbers = [10, 20, 10, 30, 20, 10, 40];

// let freq = {};

// // for(let i=0; i<numbers.length; i++){
// //     let char = numbers[i];
// //     freq[char] = (freq[char] || 0) + 1
// // };

// // console.log(freq);

// for (let num of numbers){
//     if (freq[num]) {
//         freq[num]++;
//     } else {
//         freq[num] = 1;
//     }
// };

// console.log(freq);

// // 🔥 Q13 Most Frequent Number

// let numbers = [10, 20, 10, 30, 20, 10, 20, 40, 20, 5,20];

// let sortt = numbers.sort((a, b) => a - b)
// let arr = [];

// let count = 1;
// let maxCount= 1;

// for(let i=0; i<sortt.length; i++){

//     if(sortt[i]===sortt[i+1]){
//        count++;
//     }else{
//         if(count > maxCount){
//             maxCount = count;
//             arr = [sortt[i]]
//         }
//         count=1;
//     };
// };

// console.log(sortt);
// console.log(`${arr} number of counts is ${maxCount}`);

// // 🔥 Q14 Reverse an array without using .reverse()

// let numbers = [10, 20, 30, 40, 50];

// for(let i=0,j=numbers.length-1; i<j; i++,j--){
    
//     let temp = numbers[i];
//     numbers[i] = numbers[j];
//     numbers[j] = temp;    
// };

// console.log(numbers);


// // 🔥 Q15 Move Zeros to the End

// let numbers = [0, 10, 0, 20, 30, 0, 40];

// let arr = [];
// let zero = [];

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]>1){
//         arr.push(numbers[i])
//     }else if(numbers[i]===0){
//         zero.push(numbers[i])
//     }
// }
// console.log(arr)
// console.log(arr.concat(zero))


// // 🔥 Q16 Find the Missing Number

// let numbers = [1, 2, 4, 5, 6];
// let arr = [];
// for(let i=0; i<numbers.length-1; i++){
//     if(numbers[i]+1 !==numbers[i+1]){
//         arr.push(numbers[i]+1)
//     };
// };

// console.log(arr)

// 🔥 Q17 Two Sum

// let numbers = [2, 7, 11, 15];
// let target = 9;
// let arr = [];

// for(let i=0; i<numbers.length; i++){
//     for (let j=i+1; j<numbers.length; j++){
//         if(numbers[i]+numbers[j]===target){
//             arr.push(numbers[i],numbers[j])
//         };
//     };
// };

// console.log(arr)

// // 🔥 Q18 Separate Positive, Negative & Zero 

// let numbers = [10, -5, 0, 20, -8, 0, 15, -2];

// let zero = [];
// let pos = [];
// let neg = [];

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]>0){
//         pos.push(numbers[i])
//     }else if(numbers[i]<0){
//         neg.push(numbers[i])
//     }else{
//         zero.push(numbers[i])
//     };
// };

// console.log(zero);
// console.log(pos.sort());
// console.log(neg.sort());

// // 🔥 Q18 Find the Average

// let numbers = [10, 20, 30, 40, 50];

// let avg = 0;

// for(let i=0; i<numbers.length; i++){
//     if(avg<numbers[i]){
//         let result= numbers[i]/numbers.length;
//         avg+=result
//     }
// }

// console.log(avg);

// // 🔥 Q19 Find the Largest Difference

// let numbers = [10, 5, 25, 8, 40, 15];

// let small = numbers[0];
// let large = numbers[0];

// for(let i=0; i<numbers.length; i++){
    
//     if(numbers[i]>large){
//         large=numbers[i]
//     }else if(numbers[i]<small){
//         small=numbers[i]
//     }

//     // let result = large - small;
//     // largestDiff+=result;
// };

// console.log(small)
// console.log(large)

// console.log(`The difference between large number and small number is- ${large-small}`)

// // 🔥 Q20 Rotate an Array by One Position

// let numbers = [10, 20, 30, 40, 50];
// let last = numbers[numbers.length-1]

// for(let i=numbers.length-1; i>0; i--){
//     numbers[i]=numbers[i-1]
// }

// numbers[0]=last
// console.log(numbers);

// 🔥 Q21 Move All Zeros to the End

let numbers = [0, 5, 0, 3, 8, 0, 2];
let j = 0;

for(let i=0; i<numbers.length; i++){ 
   if(numbers[i]!==0){
      [numbers[i], numbers[j]]=[numbers[j],numbers[i]];
      j++;
   };
};

console.log(numbers)


