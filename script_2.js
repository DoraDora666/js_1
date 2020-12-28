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

// function power(val, pow) {
//     if (pow !== 0 && pow > 0) {
//         return val * power(val, pow-1);
//     }
//     else if(pow !== 0 && pow < 0) {
//         return power(val, pow+1) / 2;
//     }
//     else {
//         return 1
//     }
// }
//
// console.log(power(2,1))
// console.log(Math.pow(2,0))

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let winsPlayer = 0;
let winsPC = 0;

function game() {
    const PC = getRandomIntInclusive(1,5);
    const player = +prompt('Введите число от 1 до 5, где \n' +
        ' 1 ножницы\n' +
        ' 2 бумага\n' +
        ' 3 камень\n' +
        ' 4 ящерица\n' +
        ' 5 спок');

    if (
        player === 1 && PC === 2 ||
        player === 1 && PC === 4 ||
        player === 2 && PC === 3 ||
        player === 2 && PC === 5 ||
        player === 3 && PC === 1 ||
        player === 3 && PC === 4 ||
        player === 4 && PC === 2 ||
        player === 4 && PC === 5 ||
        player === 5 && PC === 1 ||
        player === 5 && PC === 3) {
        console.log('Вы победили');
        winsPlayer++;
    } else if (PC === player) {
        console.log('Ничья');
    } else {
        console.log('Компьютер победил');
        winsPC++;
    }
    console.log(`Компьютер выбрал ${numberToWord(PC)}. Вы выбрали ${numberToWord(player)}.\n 
    Ваш счёт ${winsPlayer}. Счет компьютера ${winsPC}`);
    if (winsPlayer === 5) {
        console.log('Вы победили')
        return
    }
    else if (winsPC === 5) {
        console.log('Компьютер победил')
        return
    }
    game();
}

function numberToWord (number) {
    switch (number) {
        case 1:
            return 'Ножницы';
        case 2:
            return 'Бумага';
        case 3:
            return 'Камень';
        case 4:
            return 'Ящерица';
        case 5:
            return 'Спок';
        default:
            return 'Введено неверное число';
    }
}

game();