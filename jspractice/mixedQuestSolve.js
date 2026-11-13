
// 🌟Question 1 — Array methods + conditions

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



// 🌟Question 2 — Object + Array methods

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


// 🌟Question 3 — Find the highest salary

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
    
    

// 🌟Question 4 — Second-highest salary
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



// // 🌟Question 4 — find lowest salary using reduce()


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


//🌟 Question 5 — Remove duplicate values

// const numbers = [10, 20, 30, 20, 40, 10, 50, 30];

// const uniQ = numbers.filter((value,index)=>
// numbers.indexOf(value)===index)

// console.log(uniQ);

// // Remember this interview concept
// // - indexOf(value) === index → keeps the first occurrence (unique values).
// // - indexOf(value) !== index → keeps subsequent occurrences (duplicates).



//🌟Question 6 — Find duplicate values only once

// const numbers = [10, 20, 30, 20, 40, 10, 50, 30];

// const dubliCates = numbers
// .filter((value, index)=>numbers.indexOf(value)!==index);

// console.log(dubliCates);



// 🌟Question 7 — Modify your existing code so that even if a number appears three or four times, it appears only once in the duplicate result;

// const numbers = [10, 20, 20, 20, 30, 10];

// const num3to4 = numbers
// .filter((val, idx)=> numbers.indexOf(val)!==idx && numbers.indexOf(val)===numbers.lastIndexOf(val));

// console.log(num3to4);



// 🌟Question 8 — Given this array, return only the names of employees whose salary is above the average salary.

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




//🌟 Question 9- Ready to try a question involving sort() and filter() together?

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



// 🌟Question 10-Find the top 2 products

// Your tasks:
// 1. Filter products costing more than ₹2,000.
// 2. Sort them from highest to lowest price.
// 3. Return only the top 2 product names.

// const products = [
//     { name: "Laptop", price: 55000 },
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Monitor", price: 12000 },
//     { name: "Headphones", price: 3000 },
//     { name: "Phone", price: 40000 }
// ];


// const twoProducts = products
// .filter(el=>el.price >2000)
// .sort((a,b)=> b.price-a.price)
// // .slice(0,2)
// // .map(el=>el.name)

// // console.log(twoProducts)
// console.log([twoProducts[0].name, twoProducts[1].name])




// 🌟Question 11-Write code to find the first student who scored more than 80 marks.

// const students = [
//     { name: "Aman", marks: 45 },
//     { name: "Rahul", marks: 85 },
//     { name: "Neha", marks: 92 },
//     { name: "Krish", marks: 65 }
// ];


// const findFirst = students
// .find(el=>el.marks >80);

// console.log(findFirst);


// 🌟Question 12- ind whether at least one student scored below 40.

// const students = [
//     { name: "Aman", marks: 45 },
//     { name: "Rahul", marks: 85 },
//     { name: "Neha", marks: 92 },
//     { name: "Krish", marks: 65 }
// ];

// const belowScore40 = students
// .some(el=>el.marks < 40)


// console.log(belowScore40)


// // 🌟Question 13- Find whether at least one student scored exactly 92.

// const students = [
//     { name: "Aman", marks: 45 },
//     { name: "Rahul", marks: 85 },
//     { name: "Neha", marks: 92 },
//     { name: "Krish", marks: 65 }
// ];


// const findUser92 = students
// // .filter(el=>el.marks === 92);
// .every(el=>el.marks<100)


// console.log(findUser92);

// 🌟Question 14- JavaScript Object Destructuring
// const employee = {
//     name: "Rahul",
//     salary: 35000,
//     department: "IT",
//     city: "Delhi"
// };

// // const name1 = employee.name;
// // const dep = employee.department;

// // console.log(name1);
// // console.log(dep);


2// const {name: employeeName, salary} =employee;

// console.log(employee,salary)


// 🌟Question 15- Extract city using destructuring and assign "Mumbai" as its default value.

// const user = {
//     name: "Aman",
//     age: 25
// };

// const {city = "mumbai"} = user;

// console.log(city);

// 🌟Question 16- Nested object destructuring
// Try extracting city from this nested object:

// const employee = {
//     name: "Rahul",
//     address: {
//         city: "Delhi",
//         country: "India"
//     }
// };

// // console.log(employee.address.country);
// // console.log(employee.name);

// const{name, address:{country}}=employee;

// console.log(name);  
// console.log(country);

// // 🌟Question 17- Rename + default value + nested destructuring

// const employee = {
//     name: "Krish",
//     salary: 35000,
//     address: {
//         city: "Delhi",
//         country: "India"
//     }
// };


//  const{name=employeename,salary, address:{city}, department="IT"} = employee;

//  console.log(name,salary,city, department);


// 🌟Question 18- What is array destructuring?

// const fruits = ["Apple", "Mango", "Banana", "Orange"];

// const[firstFuit, ,thirdFruit] = fruits;

// console.log(firstFuit); 
// console.log(thirdFruit); 


// 🌟Question 19- Default values in array destructuring

const numbers = [10, 20];

const[, ,thirdNum = 100] = numbers;

console.log(numbers);
