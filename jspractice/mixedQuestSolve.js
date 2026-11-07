
// Question 1 — Array methods + conditions

// Your task:
// 1. Filter numbers greater than 30.
// 2. Keep only even numbers.
// 3. Multiply each remaining number by 2.
// 4. Print the final array.

// const numbers = [12, 25, 30, 45, 50, 65, 80, 95];

// const result = numbers.filter((el)=>{
//     const grt30 = el>30;

//     const evenNumx2 = grt30 && el%2===0;

//     return evenNumx2;    

// });

// console.log(result.map(el=>el*2))



// Question 2 — Object + Array methods

// Find employees whose salary is greater than ₹30,000 and return only their names.

// const employees = [
//     { name: "Aman", salary: 25000 },
//     { name: "Rahul", salary: 40000 },
//     { name: "Krish", salary: 30000 },
//     { name: "Neha", salary: 50000 }
// ];

// const userFind = employees
//                 .filter(el=> el.salary>30000)
//                 .map(el=>el.name)

// console.log(userFind);


// Question 3 — Find the highest salary

// Your task: Find the employee who has the highest salary and print their complete object (name and salary).

// const employees = [
//     { name: "Aman", salary: 25000 },
//     { name: "Rahul", salary: 40000 },
//     { name: "Krish", salary: 30000 },
//     { name: "Neha", salary: 50000 }
// ];

// const highSalaryUser = employees
// .reduce((prev, curr.salary)=>{
    //     const find =prev.salary>curr.salary.salary ? prev:curr.salary;
    //     return find;
    // })
    
    // console.log(highSalaryUser);
    
    

// Question 4 — Second-highest salary
// Find the employee with the second-highest salary and print their complete object.

//                                      part 1-use sort

    // const employees = [
    //     { name: "Aman", salary: 25000 },
    //     { name: "Rahul", salary: 40000 },
    //     { name: "Krish", salary: 30000 },
    //     { name: "Neha", salary: 50000 }
    // ];


    // // const secHigheshSalary = employees
    // // .map(el=>el.salary)
    // // .sort()
    

    // // console.log(secHigheshSalary[secHigheshSalary.length-2]);


    // const data= employees.
    // sort((a,b)=>b.salary - a.salary)

    // console.log(data[1])

//                                      part 2-use reduce 

// const employees = [
//         { name: "Aman", salary: 25000 },
//         { name: "Rahul", salary: 40000 },
//         { name: "Krish", salary: 30000 },
//         { name: "Neha", salary: 50000 }
//     ];

// const secHigheshSalary = employees
// .reduce((prev,curr)=>{

//     if(curr.salary > prev.first.salary){
//         prev.second = prev.first;
//         prev.first = curr;
//     }else if(curr.salary > prev.second.salary){
//         prev.second = curr;
//     }
//     return prev;
//     },{
//     first: { salary: -Infinity },
//     second: { salary: -Infinity }
// });


// console.log(secHigheshSalary.second)



// // Question 4 — find lowest salary using reduce()


// const employees = [
//         { name: "Aman", salary: 25000 },
//         { name: "Rahul", salary: 40000 },
//         { name: "Krish", salary: 30000 },
//         { name: "Neha", salary: 50000 }
//     ];


// const lowestOne = employees.reduce((prev, curr)=>{
   
//     if(curr.salary<prev.salary){
//         prev = curr;
//     }
//     return prev;
// })

// console.log(lowestOne);


//Question 5 — Remove duplicate values

// const numbers = [10, 20, 30, 20, 40, 10, 50, 30];

// const uniQ = numbers.filter((value,index)=>
// numbers.indexOf(value)===index)

// console.log(uniQ);

// // Remember this interview concept
// // - indexOf(value) === index → keeps the first occurrence (unique values).
// // - indexOf(value) !== index → keeps subsequent occurrences (duplicates).



//Question 6 — Find duplicate values only once

// const numbers = [10, 20, 30, 20, 40, 10, 50, 30];

// const dubliCates = numbers
// .filter((value, index)=>numbers.indexOf(value)!==index);

// console.log(dubliCates);



// //Question 6 — Modify your existing code so that even if a number appears three or four times, it appears only once in the duplicate result;

// const numbers = [10, 20, 20, 20, 30, 10];

// const num3to4 = numbers
// .filter((val, idx)=> numbers.indexOf(val)!==idx && numbers.indexOf(val)===numbers.lastIndexOf(val));

// console.log(num3to4);



// //Question 6 — Given this array, return only the names of employees whose salary is above the average salary.

// const employees = [
//     { name: "Aman", salary: 25000 },
//     { name: "Rahul", salary: 40000 },
//     { name: "Krish", salary: 30000 },
//     { name: "Neha", salary: 50000 }
// ];  

// const avgSalary = employees
// .reduce((prev, curr)=> prev+curr.salary,0)/employees.length;

// const highEarners = employees
// .filter(el=>el.salary > avgSalary)
// .map(el=> ({"name": el.name}))


// console.log(highEarners);




//Question 7- Ready to try a question involving sort() and filter() together?

// Task:
// 1. Filter products with a price above ₹1,000.
// 2. Sort them from highest price to lowest.
// 3. Return only their names.

// const products = [
//     { name: "Laptop", price: 55000 },
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Monitor", price: 12000 },
//     { name: "Headphones", price: 3000 }
// ];

// const highPrice = products
// .filter(el=>el.price>1000)
// .sort((a,b)=>b.price-a.price)


// console.log(highPrice)


// // Interview tip: Remember the sequence:
// // - filter() → selects
// // - sort() → arranges
// // - map() → transforms



// Question 8-Find the top 2 products

// Your tasks:
// 1. Filter products costing more than ₹2,000.
// 2. Sort them from highest to lowest price.
// 3. Return only the top 2 product names.

const products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "Headphones", price: 3000 },
    { name: "Phone", price: 40000 }
];


const twoProducts = products
.filter(el=>el.price >2000)
.sort((a,b)=> a.price-b.price)