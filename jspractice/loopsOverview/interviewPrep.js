
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

// case 1
// let numbers = [45, 12, 89, 23, 7, 56];
// let arr = numbers[0];
// let arr2 = numbers[0];

// for(let i=0; i<numbers.length; i++){
//    for( let j=i+1; j<numbers.length; j++){
//     if(numbers[j]>arr){
//         arr = numbers[j];
//     }else if(numbers[i]<arr2){
//         arr2 = numbers[i];
//     };
//    };
// };

// console.log(`This is largest number in array = ${arr}`);
// console.log(`This is smallest number in array = ${arr2}`);

// case 2
// let largest = numbers[0];
// let smallest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }

//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }

// console.log(`This is largest number in array = ${largest}`);
// console.log(`This is smallest number in array = ${smallest}`);


// // q.4 Remove duplicate characters

// let str = "programming";
// let str2 = "";

// for(let i=0; i<str.length; i++){
//     if(!str2.includes(str[i])){
//         str2+=str[i];
//     };
// };
// console.log(str2);


// //q.5 Find the first non-repeating character in a string

// let str = "aabbcde";
// let str2 = "";

// for(let i=0; i<str.length; i++){
//     if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
//         str2+=str[i];
//         break;
//     };
// }
// console.log(str2);

// //q.6 Reverse words
// let sentence = "I love JavaScript";
// let words = sentence.split(" ");

// for(let i=0, j=words.length-1; i<j; i++, j--){
//         let temp = words[i];
//         words[i] = words[j];
//         words[j] = temp;
// };
// sentence=words.join(" ")
// console.log(sentence);



// // q.7 Find longest word

// let sentence = "I am learning JavaScript programming";

// let strB = sentence.split(" ");

// let str = "";

// for(let i=0; i<strB.length; i++){
//         if(strB[i].length>str.length){
//                 str=strB[i];
//         };     
// };  
// console.log(str);    


// //q. 8 Nested array sum

// let numbers = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let sum = 0;

// for(let i=0; i<numbers.length; i++){
//     for(let j=0; j<numbers[i].length; j++){
//         sum+=numbers[i][j]
//     };
// };

// console.log(sum);

// //q .9 Flatten an array manually

// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// let arr2 = [];

// for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr[i].length; j++){
//                 arr2.push(arr[i][j]);
//         };
// };
// console.log(arr2)



// q.10 Student marks analysis

// Print every student.
// Find highest marks.
// Find lowest marks.
// Calculate average.
// Count students who passed (>= 40).
// Count students who failed.
// Print the name of the topper.

// let students = [
//     {name: "Aman", marks: 75},
//     {name: "Rahul", marks: 45},
//     {name: "Priya", marks: 88},
//     {name: "Neha", marks: 32}
// ];

// let max =[];
// let min =0;
// let avg =0;
// let findA40=[];
// let fail=[];
// let topper=[];

// for(let i=0; i<students.length; i++){
//         //ans.1
//         for(let j in students[i]){
//                 console.log(`${j}:- ${students[i][j]}`);        //j also access key in object -&&- student[i] = 0 idx, student[i][j] = 0 idx*value
                
//                 if(students[i].marks>max){
//                         max=students[i].marks;
//                 }else if(students[i].marks<max){
//                         min=students[i].marks;
//                 };
                
//                 if(students[i].marks>=40){
//                         findA40.push(` ${j}:- ${students[i][j]}`)
//                 }else if(students[i].marks<40){
//                         fail.push(` ${j}:- ${students[i][j]}`)
//                 };

//                 avg+=students[i].marks/students.length;
//         };             
// };

// console.log(max);
// console.log(min);
// console.log(`The average of students:- ${avg}`);
// console.log(`students  score above 40:- {${findA40}}`);
// console.log(`students  score below 40:- {${fail}}`);
// console.log(topper+max)
