// let a = +prompt();
// let b = +prompt();
// let r;
//
// if (a > 0 && b > 0) {
//     console.log(r = a - b);
// }
// else if (a < 0 && b < 0) {
//     console.log(r = a * b);
// }
// else {
//     console.log(r = a = b);
// }

// const userInput = +prompt();
// function showNumber (number) {
//     switch (number) {
//         case 16:
//             break;
//         default:
//             console.log(number)
//             number++;
//             showNumber(number)
//     }
// }
//
// showNumber(userInput);

// function addition(numberOne, numberTwo) {
//     return numberOne + numberTwo;
// }
//
// function subtraction(numberOne, numberTwo) {
//     return numberOne - numberTwo;
// }
//
// function multiplication(numberOne, numberTwo) {
//     return numberOne * numberTwo;
// }
//
// function division(numberOne, numberTwo) {
//     if (numberTwo !== 0) return numberOne / numberTwo;
// }
//
// function mathOperation(numberOne, numberTwo, operation) {
//     switch (operation) {
//         case "division":
//             console.log(division(numberOne, numberTwo));
//             break;
//         case "multiplication":
//             console.log(multiplication(numberOne, numberTwo));
//             break;
//         case "subtraction":
//             console.log(subtraction(numberOne, numberTwo));
//             break;
//         case "addiction"  :
//             console.log(addition(numberOne, numberTwo));
//             break;
//     }
//
// }
//
// mathOperation(1, 2, "division")
// mathOperation(1, 2, "subtraction")
// mathOperation(1, 2, "multiplication")
// mathOperation(1, 2, "addiction")

function power(val, pow) {
    if (pow !== 0 && pow > 0) {
        return val * power(val, pow-1);
    }
    else if(pow !== 0 && pow < 0) {
        return power(val, pow+1) / 2;
    }
    else {
        return 1
    }
}

console.log(power(2,0))
console.log(Math.pow(2,0))