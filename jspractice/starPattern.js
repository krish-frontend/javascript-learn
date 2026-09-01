
// // q.1 print star pattern as below as same: -
// // *
// // **
// // ***
// // ****
// // *****

// // -------code:---------
// for(let i=1; i<=5; i++){
//     let star = "";
//     for(let j=1; j<=i; j++){
//         star+="*";
//     };
//     console.log(star);
// };


// //q.2 print reverse star pattern as below as same: -
// // *****
// // ****
// // ***
// // **
// // *

// // -------code: --------

// for(let i=5; i>=1; i--){
//     let star = "";
//     for(let j=i; j>=1; j--){
//         star+="*";
//     };
//     console.log(star);
// }; 

// // q.3 Same number pattern as below as same:-
// // 1
// // 22
// // 333
// // 4444
// // 55555

// // --------code-------

// for(let i=1; i<=5;i++){
//     let star="";
//     for(let j=1;j<=i;j++){
//        star+=i;
//     };
//     console.log(star);
// };

// q.4 number pattern increase with each row as below as same:-
// 1
// 12
// 123
// 1234
// 12345

// //----code-----

// for(let i=1; i<=5;i++){
//     let py="";
//     for(let j=1;j<=i;j++){
//         py+=j;
//     };
//     console.log(py);
// };

// //q.5 Same number pattern below :-

// // 1
// // 22
// // 333
// // 4444
// // 55555

// // -----code-----

// for(let i=1; i<=5;i++){
//     let py="";
//     for(let j=1; j<=i;j++){
//         py+=i;
//     };
//     console.log(py);
// };



//q.6 table of 1 to 5;

//--------code-----

// for(let i=1; i<=10;i++){
    
// };



//q.7 find missing number in a given array: -

let numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];

for(let i=1;i<=numbers.length-1;i++){
    if(numbers[i]!==i+1){
        console.log(`this is number is missing :- ${i+1}`)
        break;
    };
};
