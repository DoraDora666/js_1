let basket = [100, 200, 300, 400];

function countBasketPrice() {
    let summ = 0;
    for (let i = 0; i < basket.length; i++) {
        summ += basket[i];
    }
    return summ;
}

console.log(`В корзине ${basket.length} ${declOfNum(basket.length, ['товар', 'товара', 'товаров'])} на сумму ${countBasketPrice()} ${declOfNum(countBasketPrice(), ['рубль', 'рубля', 'рублей'])}`)

function declOfNum(receivedAmount, receivedWords) {
    receivedAmount %= Math.abs(100)
    let num = receivedAmount % 10

    if (receivedAmount >= 11 && receivedAmount <= 19) {
        return receivedWords[2]
    } else if (num >= 2 && num <= 4) {
        return receivedWords[1]
    } else if (num === 1) {
        return receivedWords[0]
    } else {
        return receivedWords[2]
    }

}

for (let i = 0; i <= 10; console.log(i++)) {
}

let xCount = '';
for (let i = 0; i < 5; i++) {
    xCount += 'x';
    console.log(xCount)
}

let number = -1;
do {
    if (number % 2 === 0 && number !== 0) {
        console.log(number + ' - четное число')
        number += 1;
    } else if (number % 2 !== 0 && number !== 0) {
        console.log(number + ' - нечетное число')
        number += 1;
    } else {
        console.log(number + ' - это ноль')
        number += 1;
    }
} while (number <= 100)