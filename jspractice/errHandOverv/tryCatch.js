

//1. //here is find error reference and type of error
// try {
//     console.log(username);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

//2. // the important part is: finally runs regardless of whether an error happens or not
// try {
//     console.log(username);
// } catch (error) {
//     console.log("Catch");
// } finally {
//     console.log("Finally");
// }

/*try     → attempt the code
catch   → runs only if error occurs
finally → runs almost always, whether error occurs or not
*/

// 2. //JavaScript also lets you create your own error intentionally:
// function checkAge(age) {
//     if (age < 18) {
//         throw new Error("Age must be 18 or above");
//     }

//     return "Allowed";
// }

// try{
//     console.log(checkAge(15));
// }catch(error){
//     console.log(error.message)
// };

// let container = document.querySelector("#container");
// let para = document.querySelector("#para").style.background="red";
// para.textContent="bhaijaan"

// container.removeChild(para);

