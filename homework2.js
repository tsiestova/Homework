// task1

let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"


let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x !== y;
console.log(res3); // true
console.log(typeof res3); // "boolean"


let res4 = x + y + undefined;
console.log(res4); // NaN
console.log(typeof res4); // "number"

// // task2

let inputDigit = prompt('Enter a digit');

let condition = inputDigit > 0 && inputDigit % 2 === 0 && inputDigit % 7 === 0;

console.log(condition);


// //task3

const arr = [];

arr[0] = 2021;
arr[1] = 'March';
arr[2] = true;
arr[3] = null;

console.log(arr.length);

let inputValue = prompt('Enter a digit');

arr[4] = inputValue;

console.log(arr[4]);

arr.shift();

console.log(arr);

// //task4

let cities = ["Rome", "Lviv", "Warsaw"];
let newStr = cities.join('*');

console.log(newStr);

// //task5

let isAdult = prompt('Ваш вік?');

if (isAdult >= 18) {
    alert('Ви досягли повнолітнього віку');
} else {
    alert('Ви ще надто молоді');
}


// //task6

let sideA = parseInt(prompt('Введіть значення сторони а'), 10);
let sideB = parseInt(prompt('Введіть значення сторони b'), 10);
let sideC = parseInt(prompt('Введіть значення сторони c'), 10);

if (sideA && sideB && sideC) {
    let p = (sideA + sideB + sideC) / 2;
    let s = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
    console.log(s.toFixed(3));
} else {
    alert('Incorrect data');
}

const newArr = [sideA, sideB, sideC];


newArr.sort((a, b) => a - b);

if (newArr[2] === Math.sqrt(newArr[0] * newArr[0] + newArr[1] * newArr[1])) {
    console.log('Трикутник є прямокутним');
} else {
    console.log('Трикутник не є прямокутним');
}

// //task7

let hour = new Date().getHours();
let period;


if (hour >= 23 || hour < 5) {
    alert('Доброї ночі!');
    period = 'night';
}
if (hour >= 5 && hour < 11) {
    alert('Доброго ранку!');
    period = 'morning';
}
if (hour >= 11 && hour < 17) {
    alert('Добрий день!');
    period = 'day';
}
if (hour >= 17 && hour < 23) {
    alert('Доброго вечора!');
    period = 'evening';
}


switch (period) {
    case "night":
        alert('Доброї ночі!');
        break;

    case "morning":
        alert('Доброго ранку!');
        break;

    case "day":
        alert('Добрий день!');
        break;

    case "evening":
        alert('Доброго вечора!');
        break;

    default:
        console.log('incorrect data');
}

