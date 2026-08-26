
// q.1 print star pattern as below as same: -
// *
// **
// ***
// ****
// *****

// code:-

let irows = 5;
let jcols = 5;

for(let i=1; i<=irows; i++){
    let star = "";
    for(let j=1; j<=jcols; j++){
        star+="*";
    };
    console.log(star);
};