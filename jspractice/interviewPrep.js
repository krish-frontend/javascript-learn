
// q.1 find common elements in two arrays: -

// let arr1 = [1, 2, 3, 4, 7];
// let arr2 = [3, 4, 5, 6, 7];
// let arr3 = [];

// for(let i of arr1){
//     for(let j of arr2){
//         if(i===j){
//             arr3.push(i);
//         };
//     };
// };

// console.log(arr3);

//q.2 move zeroes to the end 

// let numbers = [0, 1, 0, 3, 12];
// let num2 = [];

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]>0){
//         num2.push(numbers[i])
//     };
// };
    
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]===0){
//         num2.push(numbers[i])
//     };

// };

// console.log(num2);

// q.3 Find largest and smallest together

let numbers = [45, 12, 89, 23, 7, 56];
let arr = numbers[0];
let arr2 = numbers[0];

for(let i=0; i<numbers.length; i++){
   for( let j=i+1; j<numbers.length; j++){
    if(numbers[j]>arr){
        arr = numbers[j];
    }else if(numbers[i]<arr2){
        arr2 = numbers[i];
    };
   };
};

console.log(`This is largest number in array = ${arr}`);
console.log(`This is smallest number in array = ${arr2}`);


