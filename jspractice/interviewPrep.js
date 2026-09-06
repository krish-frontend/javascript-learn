
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

let numbers = [0, 1, 0, 3, 12];
let num2 = [];

for(let i=0; i<numbers.length; i++){
    if(numbers[i]>0){
        num2.push(numbers[i])
    };
};
    for(let i=0; i<numbers.length; i++){
    if(numbers[i]===0){
        num2.push(numbers[i])
    };

};

console.log(num2);
