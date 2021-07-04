let currentResult = 0;

// let calculationDescription = '(' + currentResult + ' + 10) * 3 /2 - 1';
// Template literal with back ticks `` allows to use variables inside a string `${variableName} + 32 `
let calculationDescription =`( ${currentResult} + 10 ) * 3 / 2 - 1`;


// JS doesn't execute code right away, rather it reads/interprets code top to bottom first, pull all the functions to the top and keeps a track of them for further execution
// That's why its alright to define function anywhere before or after its aclled

function add(num1, num2) {
    const result =  num1 + num2;
    // alert(`The result is : ${result}`);
    return result; 
}

currentResult = add(1,2); 
outputResult(currentResult, calculationDescription);

// Hoisting in JS
// all JS variables are moved to the top at time of compilation before code is executed.

// Variable shadowing
//  same variable defined with var or let keyword in global can be used to define another variable inside local scope if we initialized it with let keyword (can't with var)
