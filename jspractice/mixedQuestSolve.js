
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
// .reduce((prev, curr)=>{
    //     const find =prev.salary>curr.salary ? prev:curr;
    //     return find;
    // })
    
    // console.log(highSalaryUser);
    
    

// Question 4 — Second-highest salary
// Find the employee with the second-highest salary and print their complete object.
    
    const employees = [
        { name: "Aman", salary: 25000 },
        { name: "Rahul", salary: 40000 },
        { name: "Krish", salary: 30000 },
        { name: "Neha", salary: 50000 }
    ];


    const secHigheshSalary = employees
    .map(el=>el.salary)
    .sort()
    

    console.log(secHigheshSalary[secHigheshSalary.length-2]);