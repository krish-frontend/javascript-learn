
// Question 1 — Array methods + conditions

// Your task:
// 1. Filter numbers greater than 30.
// 2. Keep only even numbers.
// 3. Multiply each remaining number by 2.
// 4. Print the final array.

const numbers = [12, 25, 30, 45, 50, 65, 80, 95];

const result = numbers.filter((el)=>{
    const grt30 = el>30;

    const evenNumx2 = grt30 && el%2===0;

    return evenNumx2;    

});

console.log(result.map(el=>el*2))